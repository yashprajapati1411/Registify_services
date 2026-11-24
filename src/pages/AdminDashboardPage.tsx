import React, { useState, useEffect } from 'react';
import { 
  Users, Search, Filter, Download, Plus, CheckCircle, 
  Clock, AlertCircle, Phone, Mail, MapPin, Calendar, 
  Lock, Eye, RefreshCw, ChevronRight, X, UserCheck, ShieldCheck, FileSpreadsheet, Landmark, Building 
} from 'lucide-react';
import { 
  getStoredEnquiries, 
  updateEnquiryStatus, 
  addEnquiryNote, 
  assignEnquiry, 
  exportEnquiriesToCSV 
} from '../services/enquiryService';
import { BaseEnquiry, LoanEnquiry, BusinessEnquiry, ContactEnquiry, EnquiryStatus } from '../types';

export const AdminDashboardPage: React.FC = () => {
  // Authentication Guard
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('registify_admin_auth') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Data & Filters
  const [enquiries, setEnquiries] = useState<(LoanEnquiry | BusinessEnquiry | ContactEnquiry)[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'loan' | 'business' | 'contact'>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  
  // Selected enquiry detail modal
  const [selectedEnquiry, setSelectedEnquiry] = useState<(LoanEnquiry | BusinessEnquiry | ContactEnquiry) | null>(null);
  const [newNote, setNewNote] = useState('');
  const [assigneeInput, setAssigneeInput] = useState('');
  const [followUpInput, setFollowUpInput] = useState('');

  const refreshData = () => {
    const list = getStoredEnquiries();
    setEnquiries(list);
    if (selectedEnquiry) {
      const refreshedItem = list.find(e => e.id === selectedEnquiry.id || e.enquiry_id === selectedEnquiry.enquiry_id);
      if (refreshedItem) setSelectedEnquiry(refreshedItem);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      refreshData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default demo passcode for review
    if (passwordInput === 'admin2026' || passwordInput === 'registify') {
      setIsAuthenticated(true);
      sessionStorage.setItem('registify_admin_auth', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('registify_admin_auth');
  };

  // Metrics
  const totalCount = enquiries.length;
  const newCount = enquiries.filter(e => e.status === 'new').length;
  const inProcessCount = enquiries.filter(e => e.status === 'in_process' || e.status === 'consultation_scheduled' || e.status === 'documents_pending').length;
  const completedCount = enquiries.filter(e => e.status === 'completed').length;
  const loanCount = enquiries.filter(e => e.type === 'loan').length;
  const businessCount = enquiries.filter(e => e.type === 'business').length;

  // Filtered List
  const filteredList = enquiries.filter(item => {
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      item.fullName.toLowerCase().includes(q) ||
      item.mobile.includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.enquiry_id.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q);
    return matchesType && matchesStatus && matchesSearch;
  });

  const handleStatusChange = (id: string, status: EnquiryStatus) => {
    updateEnquiryStatus(id, status);
    refreshData();
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry || !newNote.trim()) return;
    addEnquiryNote(selectedEnquiry.id, newNote);
    setNewNote('');
    refreshData();
  };

  const handleAssign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEnquiry || !assigneeInput.trim()) return;
    assignEnquiry(selectedEnquiry.id, assigneeInput, followUpInput);
    refreshData();
  };

  const handleExportCSV = () => {
    const csvContent = exportEnquiriesToCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `registify-enquiries-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusBadge = (status: EnquiryStatus) => {
    const styles: Record<EnquiryStatus, { bg: string; text: string; label: string }> = {
      new: { bg: 'bg-blue-100 border-blue-300', text: 'text-blue-800', label: 'New' },
      contacted: { bg: 'bg-purple-100 border-purple-300', text: 'text-purple-800', label: 'Contacted' },
      consultation_scheduled: { bg: 'bg-amber-100 border-amber-300', text: 'text-amber-800', label: 'Consultation' },
      documents_pending: { bg: 'bg-orange-100 border-orange-300', text: 'text-orange-800', label: 'Docs Pending' },
      in_process: { bg: 'bg-teal-100 border-teal-300', text: 'text-teal-800', label: 'In Process' },
      completed: { bg: 'bg-green-100 border-green-300', text: 'text-green-800', label: 'Completed' },
      rejected: { bg: 'bg-red-100 border-red-300', text: 'text-red-800', label: 'Rejected' },
      closed: { bg: 'bg-slate-100 border-slate-300', text: 'text-slate-700', label: 'Closed' },
    };
    const s = styles[status] || styles.new;
    return (
      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${s.bg} ${s.text}`}>
        {s.label}
      </span>
    );
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d1d33] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-[#142B49] text-white rounded-2xl flex items-center justify-center mx-auto font-bold text-xl shadow-md">
              RS
            </div>
            <h2 className="text-2xl font-extrabold text-[#142B49]">Admin Portal Access</h2>
            <p className="text-xs text-slate-500">
              Registify Services Lead & Customer Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {authError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>Invalid credentials. Use <strong>admin2026</strong> for demo access.</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Enter Security Key / Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  required
                  placeholder="admin2026"
                  value={passwordInput}
                  onChange={e => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-royal-500"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Demo review passcode: <code className="bg-slate-100 px-1 py-0.5 rounded">admin2026</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#142B49] hover:bg-[#091729] text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Unlock Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#142B49] text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-sm">
              RS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-[#142B49]">Enquiry Management Console</h1>
                <span className="px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-[10px] font-bold">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Registify Services Internal Dashboard • Real-time Enquiry Tracking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors border border-slate-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={refreshData}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              title="Refresh Enquiries"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase">Total Leads</span>
            <span className="text-2xl font-black text-[#142B49]">{totalCount}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-blue-200 shadow-xs bg-blue-50/20">
            <span className="text-[11px] font-semibold text-blue-600 block uppercase">New / Unread</span>
            <span className="text-2xl font-black text-blue-700">{newCount}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-teal-200 shadow-xs bg-teal-50/20">
            <span className="text-[11px] font-semibold text-teal-600 block uppercase">In Process</span>
            <span className="text-2xl font-black text-teal-700">{inProcessCount}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-green-200 shadow-xs bg-green-50/20">
            <span className="text-[11px] font-semibold text-green-600 block uppercase">Completed</span>
            <span className="text-2xl font-black text-green-700">{completedCount}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase">Loan Leads</span>
            <span className="text-2xl font-black text-[#142B49]">{loanCount}</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-semibold text-slate-400 block uppercase">Business Leads</span>
            <span className="text-2xl font-black text-[#142B49]">{businessCount}</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, phone, email, ID, city..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-royal-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Type selector */}
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value as any)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="all">All Divisions</option>
              <option value="loan">Loans Only</option>
              <option value="business">Business Services</option>
              <option value="contact">General Contact</option>
            </select>

            {/* Status selector */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="consultation_scheduled">Consultation Scheduled</option>
              <option value="documents_pending">Documents Pending</option>
              <option value="in_process">In Process</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#142B49] text-white">
                <tr>
                  <th className="px-5 py-3.5 font-bold">Enquiry ID</th>
                  <th className="px-5 py-3.5 font-bold">Customer Name</th>
                  <th className="px-5 py-3.5 font-bold">Category & Requirement</th>
                  <th className="px-5 py-3.5 font-bold">Location</th>
                  <th className="px-5 py-3.5 font-bold">Status</th>
                  <th className="px-5 py-3.5 font-bold">Assigned To</th>
                  <th className="px-5 py-3.5 font-bold">Date</th>
                  <th className="px-5 py-3.5 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredList.length > 0 ? (
                  filteredList.map(item => {
                    const reqDetail = item.type === 'loan'
                      ? `${(item as LoanEnquiry).loanCategory} (${(item as LoanEnquiry).requiredAmount})`
                      : item.type === 'business'
                      ? `${(item as BusinessEnquiry).specificService}`
                      : (item as ContactEnquiry).subject;

                    return (
                      <tr 
                        key={item.id} 
                        className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                        onClick={() => setSelectedEnquiry(item)}
                      >
                        <td className="px-5 py-3.5 font-mono font-bold text-[#142B49]">
                          {item.enquiry_id}
                        </td>

                        <td className="px-5 py-3.5">
                          <span className="font-bold text-[#142B49] block">{item.fullName}</span>
                          <span className="text-slate-500 text-[11px] block">{item.mobile}</span>
                        </td>

                        <td className="px-5 py-3.5 max-w-xs">
                          <div className="flex items-center gap-1.5">
                            {item.type === 'loan' ? (
                              <Landmark className="w-3.5 h-3.5 text-royal-500 flex-shrink-0" />
                            ) : (
                              <Building className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                            )}
                            <span className="font-semibold text-slate-800 truncate">{reqDetail}</span>
                          </div>
                        </td>

                        <td className="px-5 py-3.5 text-slate-600">
                          {item.city}, {item.state}
                        </td>

                        <td className="px-5 py-3.5">
                          {statusBadge(item.status)}
                        </td>

                        <td className="px-5 py-3.5 text-slate-600">
                          {item.assignedTo || <span className="text-slate-400 italic">Unassigned</span>}
                        </td>

                        <td className="px-5 py-3.5 text-slate-400 text-[11px]">
                          {new Date(item.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                        </td>

                        <td className="px-5 py-3.5 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedEnquiry(item);
                            }}
                            className="px-3 py-1 bg-slate-100 hover:bg-[#142B49] hover:text-white rounded-lg text-xs font-semibold transition-colors"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center py-12 text-slate-400">
                      No enquiries match your current search and filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Lead Detailed Drawer / Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex justify-end">
            <div className="w-full max-w-xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
              
              <div>
                {/* Drawer Header */}
                <div className="bg-[#142B49] text-white p-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-teal-300 font-bold block">
                      {selectedEnquiry.enquiry_id}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {selectedEnquiry.fullName}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-white/10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="p-6 space-y-6">
                  
                  {/* Status & Assignment Controller */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700">Update Lead Status:</span>
                      <select
                        value={selectedEnquiry.status}
                        onChange={e => handleStatusChange(selectedEnquiry.id, e.target.value as any)}
                        className="px-3 py-1.5 bg-white border border-slate-300 rounded-xl text-xs font-bold text-[#142B49]"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="consultation_scheduled">Consultation Scheduled</option>
                        <option value="documents_pending">Documents Pending</option>
                        <option value="in_process">In Process</option>
                        <option value="completed">Completed</option>
                        <option value="rejected">Rejected</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>

                    <form onSubmit={handleAssign} className="flex gap-2 pt-1 border-t border-slate-200">
                      <input
                        type="text"
                        placeholder="Assign to (e.g. Hemal Shah)"
                        value={assigneeInput}
                        onChange={e => setAssigneeInput(e.target.value)}
                        className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                      <input
                        type="date"
                        value={followUpInput}
                        onChange={e => setFollowUpInput(e.target.value)}
                        className="px-2 py-1.5 bg-white border border-slate-200 rounded-xl text-xs"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold"
                      >
                        Assign
                      </button>
                    </form>
                  </div>

                  {/* Customer Information Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">Mobile</span>
                        <a href={`tel:${selectedEnquiry.mobile}`} className="font-bold text-teal-700 hover:underline">
                          +91 {selectedEnquiry.mobile}
                        </a>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">Email</span>
                        <span className="font-bold text-slate-800 truncate block">
                          {selectedEnquiry.email}
                        </span>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">Location</span>
                        <span className="font-bold text-slate-800">
                          {selectedEnquiry.city}, {selectedEnquiry.state}
                        </span>
                      </div>
                      <div className="p-3 bg-white border border-slate-200 rounded-xl">
                        <span className="text-slate-400 block text-[10px]">Date Submitted</span>
                        <span className="font-bold text-slate-800">
                          {new Date(selectedEnquiry.created_at).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Type-Specific Data */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Enquiry Requirements
                    </h4>
                    
                    {selectedEnquiry.type === 'loan' && (
                      <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-200 space-y-2 text-xs text-slate-700">
                        <div>
                          <span className="font-bold text-[#142B49]">Loan Category: </span>
                          {(selectedEnquiry as LoanEnquiry).loanCategory}
                        </div>
                        <div>
                          <span className="font-bold text-[#142B49]">Required Amount: </span>
                          {(selectedEnquiry as LoanEnquiry).requiredAmount}
                        </div>
                        <div>
                          <span className="font-bold text-[#142B49]">Employment: </span>
                          {(selectedEnquiry as LoanEnquiry).employmentType}
                        </div>
                        {(selectedEnquiry as LoanEnquiry).monthlyIncome && (
                          <div>
                            <span className="font-bold text-[#142B49]">Income / Turnover: </span>
                            {(selectedEnquiry as LoanEnquiry).monthlyIncome}
                          </div>
                        )}
                        {(selectedEnquiry as LoanEnquiry).existingObligations && (
                          <div>
                            <span className="font-bold text-[#142B49]">Existing Obligations: </span>
                            {(selectedEnquiry as LoanEnquiry).existingObligations}
                          </div>
                        )}
                        {(selectedEnquiry as LoanEnquiry).additionalRequirements && (
                          <div>
                            <span className="font-bold text-[#142B49]">Notes / Scope: </span>
                            {(selectedEnquiry as LoanEnquiry).additionalRequirements}
                          </div>
                        )}
                      </div>
                    )}

                    {selectedEnquiry.type === 'business' && (
                      <div className="bg-teal-50/60 p-4 rounded-2xl border border-teal-200 space-y-2 text-xs text-slate-700">
                        <div>
                          <span className="font-bold text-[#142B49]">Category: </span>
                          {(selectedEnquiry as BusinessEnquiry).serviceCategory}
                        </div>
                        <div>
                          <span className="font-bold text-[#142B49]">Service: </span>
                          {(selectedEnquiry as BusinessEnquiry).specificService}
                        </div>
                        {(selectedEnquiry as BusinessEnquiry).businessName && (
                          <div>
                            <span className="font-bold text-[#142B49]">Business Name: </span>
                            {(selectedEnquiry as BusinessEnquiry).businessName}
                          </div>
                        )}
                        <div>
                          <span className="font-bold text-[#142B49]">Business Type: </span>
                          {(selectedEnquiry as BusinessEnquiry).businessType}
                        </div>
                        {(selectedEnquiry as BusinessEnquiry).additionalInformation && (
                          <div>
                            <span className="font-bold text-[#142B49]">Requirements: </span>
                            {(selectedEnquiry as BusinessEnquiry).additionalInformation}
                          </div>
                        )}
                      </div>
                    )}

                    {selectedEnquiry.type === 'contact' && (
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                        <div>
                          <span className="font-bold text-[#142B49]">Subject: </span>
                          {(selectedEnquiry as ContactEnquiry).subject}
                        </div>
                        <div>
                          <span className="font-bold text-[#142B49]">Message: </span>
                          {(selectedEnquiry as ContactEnquiry).message}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Internal Notes History */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Internal Advisory Notes
                    </h4>
                    
                    <form onSubmit={handleAddNote} className="space-y-2">
                      <textarea
                        rows={2}
                        placeholder="Add internal consultation notes..."
                        value={newNote}
                        onChange={e => setNewNote(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-royal-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#142B49] hover:bg-[#091729] text-white rounded-xl text-xs font-bold"
                      >
                        Add Timestamped Note
                      </button>
                    </form>

                    <div className="space-y-2 pt-2">
                      {selectedEnquiry.notes && selectedEnquiry.notes.length > 0 ? (
                        selectedEnquiry.notes.map((note, nIdx) => (
                          <div key={nIdx} className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                            {note}
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic">No notes recorded yet.</p>
                      )}
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct WhatsApp Action in Drawer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <a
                  href={`https://wa.me/91${selectedEnquiry.mobile}?text=${encodeURIComponent(`Hello ${selectedEnquiry.fullName}, this is regarding your enquiry with Registify Services [${selectedEnquiry.enquiry_id}].`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Reach Customer on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

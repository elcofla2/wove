"use client";

import { User, Building2, Bell, Shield } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "workspace", label: "Workspace", icon: Building2 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-wovio-charcoal mb-2">
          Settings
        </h1>
        <p className="text-wovio-slate">
          Manage your account preferences and workspace details.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation for Settings */}
        <div className="lg:w-64 flex-shrink-0 space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTab === tab.id
                    ? "bg-wovio-charcoal text-white"
                    : "text-wovio-slate hover:bg-zinc-100 hover:text-wovio-charcoal"
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-zinc">
                <h2 className="text-xl font-display font-bold text-wovio-charcoal mb-6">
                  Personal Information
                </h2>

                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-wovio-lavender/10 text-wovio-lavender rounded-full flex items-center justify-center text-2xl font-bold border border-wovio-lavender/20">
                    MW
                  </div>
                  <div>
                    <button className="bg-white border border-wovio-zinc hover:bg-zinc-50 text-wovio-charcoal px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                      Upload Avatar
                    </button>
                    <p className="text-xs text-wovio-slate mt-2">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-wovio-charcoal">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Mariam"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-wovio-charcoal">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Wilson"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-lavender/50"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-sm font-semibold text-wovio-charcoal">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue="mariam@wovio.io"
                    disabled
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-500 cursor-not-allowed"
                  />
                  <p className="text-xs text-wovio-slate">
                    To change your email, please contact support.
                  </p>
                </div>

                <div className="flex justify-end pt-6 border-t border-zinc-100">
                  <button className="bg-wovio-charcoal hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* WORKSPACE TAB */}
          {activeTab === "workspace" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-zinc">
                <h2 className="text-xl font-display font-bold text-wovio-charcoal mb-6">
                  Workspace Details
                </h2>

                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-wovio-charcoal">
                      Company Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Acme Roofing Ltd"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-mint/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-wovio-charcoal">
                      Primary Domain
                    </label>
                    <input
                      type="url"
                      defaultValue="https://acmeroofing.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-mint/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-wovio-charcoal">
                      Target Geographic Area (GEO)
                    </label>
                    <input
                      type="text"
                      defaultValue="Dallas, TX"
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-wovio-snow focus:outline-none focus:ring-2 focus:ring-wovio-mint/50"
                    />
                    <p className="text-xs text-wovio-slate">
                      This helps the AI localize your content.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-zinc-100">
                  <button className="bg-wovio-charcoal hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                    Update Workspace
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "notifications" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-wovio-zinc">
                <h2 className="text-xl font-display font-bold text-wovio-charcoal mb-6">
                  Email Notifications
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
                    <div>
                      <p className="font-semibold text-wovio-charcoal">
                        Post Published
                      </p>
                      <p className="text-sm text-wovio-slate">
                        Get notified when Wovio publishes an article.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                      />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wovio-lavender" />
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
                    <div>
                      <p className="font-semibold text-wovio-charcoal">
                        SEO Score Drops
                      </p>
                      <p className="text-sm text-wovio-slate">
                        Get alerted if your site's health needs attention.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-wovio-lavender" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
                <h2 className="text-xl font-display font-bold text-red-600 mb-2">
                  Danger Zone
                </h2>
                <p className="text-sm text-wovio-slate mb-6">
                  Irreversible actions for your account and workspace.
                </p>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-red-800">Delete Workspace</p>
                    <p className="text-sm text-red-600 mt-1">
                      Permanently remove this workspace and all generated data.
                    </p>
                  </div>
                  <button className="bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { Cookie, Settings, BarChart, Shield, ToggleLeft, Globe } from "lucide-react";
 
 const CookiePolicy = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-32 pb-20">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
             <div className="flex items-center gap-3 mb-4">
               <Cookie className="w-10 h-10 text-accent" />
               <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
                 Cookie Policy
               </h1>
             </div>
             <p className="text-muted-foreground">
               Last updated: February 5, 2026
             </p>
           </div>
 
           <div className="prose prose-lg max-w-none space-y-8">
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 What Are Cookies?
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                   This Cookie Policy explains how SHS Services Inc. ("we," "us," or "our") uses cookies and similar technologies on our website. By continuing to use our website, you consent to our use of cookies as described in this policy.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Settings className="w-6 h-6 text-accent" />
                 Types of Cookies We Use
               </h2>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">Essential Cookies</h3>
               <p className="text-foreground/80 leading-relaxed">
                 These cookies are necessary for the website to function properly. They enable core functionality such as:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Page navigation and access to secure areas</li>
                 <li>Form submission and contact requests</li>
                 <li>Shopping cart functionality (if applicable)</li>
                 <li>User authentication</li>
                 <li>Security features</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 <strong>Duration:</strong> Session cookies (deleted when you close your browser) or up to 1 year for persistent essential cookies.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Performance Cookies</h3>
               <p className="text-foreground/80 leading-relaxed">
                 These cookies collect information about how visitors use our website, including:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Which pages are visited most frequently</li>
                 <li>How visitors navigate the site</li>
                 <li>Error messages encountered</li>
                 <li>Time spent on pages</li>
                 <li>Bounce rates and exit pages</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 All information collected is aggregated and anonymous. We use this data to improve our website's performance and user experience.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 <strong>Duration:</strong> Up to 2 years.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Functional Cookies</h3>
               <p className="text-foreground/80 leading-relaxed">
                 These cookies allow our website to remember choices you make and provide enhanced features, such as:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Your preferred language or region</li>
                 <li>Username for faster login</li>
                 <li>Customized content based on your location</li>
                 <li>Previously viewed services or pages</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 <strong>Duration:</strong> Up to 1 year.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Targeting/Advertising Cookies</h3>
               <p className="text-foreground/80 leading-relaxed">
                 These cookies are used to deliver advertisements more relevant to you and your interests. They also help:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Limit the number of times you see an advertisement</li>
                 <li>Measure the effectiveness of advertising campaigns</li>
                 <li>Remember that you have visited a website</li>
                 <li>Share information with third parties such as advertisers</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 <strong>Duration:</strong> Up to 2 years.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Globe className="w-6 h-6 text-accent" />
                 Third-Party Cookies
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We may use third-party services that set their own cookies on our website. These include:
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Google Analytics</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We use Google Analytics to understand how visitors interact with our website. Google Analytics cookies collect information such as:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Number of visitors to the site</li>
                 <li>Pages visited and time spent on each page</li>
                 <li>Traffic sources (how visitors found our site)</li>
                 <li>Demographic and interest data (if available)</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-3">
                 For more information, visit: <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Social Media Plugins</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Our website may include social media features (Facebook, LinkedIn, etc.) that may set cookies to enable functionality like sharing content. These cookies are controlled by the respective social media platforms.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Google Maps</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We may use Google Maps to display our location. Google Maps may set cookies to enable map functionality and remember your preferences.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <BarChart className="w-6 h-6 text-accent" />
                 Cookie Details
               </h2>
               <p className="text-foreground/80 leading-relaxed mb-4">
                 Here is a detailed list of cookies used on our website:
               </p>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-sm">
                   <thead>
                     <tr className="border-b">
                       <th className="text-left py-3 px-2 font-semibold text-primary">Cookie Name</th>
                       <th className="text-left py-3 px-2 font-semibold text-primary">Purpose</th>
                       <th className="text-left py-3 px-2 font-semibold text-primary">Duration</th>
                       <th className="text-left py-3 px-2 font-semibold text-primary">Type</th>
                     </tr>
                   </thead>
                   <tbody className="text-foreground/80">
                     <tr className="border-b">
                       <td className="py-3 px-2">_ga</td>
                       <td className="py-3 px-2">Google Analytics - distinguishes users</td>
                       <td className="py-3 px-2">2 years</td>
                       <td className="py-3 px-2">Analytics</td>
                     </tr>
                     <tr className="border-b">
                       <td className="py-3 px-2">_gid</td>
                       <td className="py-3 px-2">Google Analytics - distinguishes users</td>
                       <td className="py-3 px-2">24 hours</td>
                       <td className="py-3 px-2">Analytics</td>
                     </tr>
                     <tr className="border-b">
                       <td className="py-3 px-2">_gat</td>
                       <td className="py-3 px-2">Google Analytics - throttles request rate</td>
                       <td className="py-3 px-2">1 minute</td>
                       <td className="py-3 px-2">Analytics</td>
                     </tr>
                     <tr className="border-b">
                       <td className="py-3 px-2">cookie_consent</td>
                       <td className="py-3 px-2">Stores your cookie preferences</td>
                       <td className="py-3 px-2">1 year</td>
                       <td className="py-3 px-2">Essential</td>
                     </tr>
                     <tr className="border-b">
                       <td className="py-3 px-2">session_id</td>
                       <td className="py-3 px-2">Maintains your session</td>
                       <td className="py-3 px-2">Session</td>
                       <td className="py-3 px-2">Essential</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <ToggleLeft className="w-6 h-6 text-accent" />
                 Managing Cookies
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 You have several options for managing cookies:
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Browser Settings</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Most web browsers allow you to control cookies through their settings. You can:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>View cookies stored on your device</li>
                 <li>Delete all or specific cookies</li>
                 <li>Block all cookies</li>
                 <li>Block third-party cookies</li>
                 <li>Set preferences for specific websites</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 To manage cookies in your browser, visit:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><a href="https://support.google.com/chrome/answer/95647" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                 <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                 <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
                 <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
               </ul>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Opt-Out Tools</h3>
               <p className="text-foreground/80 leading-relaxed">
                 You can opt out of specific tracking:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                 <li><a href="https://optout.networkadvertising.org/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-out</a></li>
                 <li><a href="https://optout.aboutads.info/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
               </ul>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Impact of Disabling Cookies</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Please note that disabling certain cookies may affect the functionality of our website. Essential cookies are required for the site to work properly. If you disable these, some features may not be available or may not work as expected.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Shield className="w-6 h-6 text-accent" />
                 Your Privacy Rights
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Depending on your location, you may have additional rights regarding cookies and tracking:
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">California Residents (CCPA)</h3>
               <p className="text-foreground/80 leading-relaxed">
                 California residents have the right to:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Know what personal information is collected</li>
                 <li>Request deletion of personal information</li>
                 <li>Opt out of the sale of personal information</li>
                 <li>Non-discrimination for exercising privacy rights</li>
               </ul>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">European Union Residents (GDPR)</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If you are in the EU, we will obtain your consent before placing non-essential cookies. You have the right to:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Access your personal data</li>
                 <li>Rectify inaccurate data</li>
                 <li>Request erasure of your data</li>
                 <li>Object to processing</li>
                 <li>Data portability</li>
                 <li>Withdraw consent at any time</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Updates to This Policy
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Contact Us
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 If you have questions about our use of cookies or this policy, please contact us:
               </p>
               <div className="mt-4 p-4 bg-muted rounded-xl">
                   <p className="text-foreground font-semibold">SHS Services Inc.</p>
                 <p className="text-foreground/80">14970 Potomac Heights Pl, Unit 113</p>
                 <p className="text-foreground/80">Woodbridge, VA 22191</p>
                 <p className="text-foreground/80 mt-2">Email: info@shsofficial.com</p>
                 <p className="text-foreground/80">Phone: (213) 268-9542</p>
               </div>
             </section>
           </div>
         </div>
       </main>
       <Footer />
     </div>
   );
 };
 
 export default CookiePolicy;
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react";
 
 const PrivacyPolicy = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-32 pb-20">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
             <div className="flex items-center gap-3 mb-4">
               <Shield className="w-10 h-10 text-accent" />
               <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
                 Privacy Policy
               </h1>
             </div>
             <p className="text-muted-foreground">
               Last updated: February 5, 2026
             </p>
           </div>
 
           <div className="prose prose-lg max-w-none space-y-8">
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Eye className="w-6 h-6 text-accent" />
                 Introduction
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 SHS Services Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our HVAC services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Database className="w-6 h-6 text-accent" />
                 Information We Collect
               </h2>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Personal Data</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We may collect personally identifiable information that you voluntarily provide to us when you:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Fill out a contact form or request a quote</li>
                 <li>Schedule a service appointment</li>
                 <li>Sign up for our newsletter or promotional communications</li>
                 <li>Participate in surveys or promotions</li>
                 <li>Contact us via phone, email, or other means</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 This information may include:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Name:</strong> First and last name</li>
                 <li><strong>Contact Information:</strong> Email address, phone number, mailing address</li>
                 <li><strong>Property Information:</strong> Address where services are to be performed</li>
                 <li><strong>Payment Information:</strong> Credit card numbers, billing address (processed securely through third-party payment processors)</li>
                 <li><strong>Service History:</strong> Records of services performed, equipment installed, and maintenance schedules</li>
               </ul>
 
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Automatically Collected Data</h3>
               <p className="text-foreground/80 leading-relaxed">
                 When you access our website, we automatically collect certain information about your device and usage, including:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Device Information:</strong> IP address, browser type, operating system, device type</li>
                 <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referring URLs</li>
                 <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                 <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar technologies</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <UserCheck className="w-6 h-6 text-accent" />
                 How We Use Your Information
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We use the information we collect for various purposes, including:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Service Delivery:</strong> To provide, maintain, and improve our HVAC services</li>
                 <li><strong>Communication:</strong> To respond to inquiries, send service confirmations, and provide customer support</li>
                 <li><strong>Scheduling:</strong> To schedule and manage service appointments</li>
                 <li><strong>Billing:</strong> To process payments and send invoices</li>
                 <li><strong>Marketing:</strong> To send promotional materials, newsletters, and special offers (with your consent)</li>
                 <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
                 <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                 <li><strong>Safety:</strong> To prevent fraud and ensure the security of our services</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Lock className="w-6 h-6 text-accent" />
                 Data Security
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>SSL/TLS encryption for data transmission</li>
                 <li>Secure storage of personal data with access controls</li>
                 <li>Regular security assessments and updates</li>
                 <li>Employee training on data protection practices</li>
                 <li>Third-party security audits</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Sharing of Information
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We may share your information in the following circumstances:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Service Providers:</strong> With third-party vendors who assist us in providing services (payment processors, scheduling software, etc.)</li>
                 <li><strong>Business Partners:</strong> With equipment manufacturers for warranty registration and service</li>
                 <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                 <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                 <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Your Rights
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Depending on your location, you may have certain rights regarding your personal information:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                 <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                 <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                 <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                 <li><strong>Opt-Out:</strong> Opt out of marketing communications at any time</li>
                 <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 To exercise any of these rights, please contact us using the information provided below.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Data Retention
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Service records may be retained for warranty purposes and to provide ongoing maintenance support.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Children's Privacy
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Mail className="w-6 h-6 text-accent" />
                 Contact Us
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
 
 export default PrivacyPolicy;
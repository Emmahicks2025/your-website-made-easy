 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { RotateCcw, Clock, CheckCircle, XCircle, AlertCircle, HelpCircle } from "lucide-react";
 
 const RefundPolicy = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-32 pb-20">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
             <div className="flex items-center gap-3 mb-4">
               <RotateCcw className="w-10 h-10 text-accent" />
               <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
                 Refund Policy
               </h1>
             </div>
             <p className="text-muted-foreground">
               Last updated: February 5, 2026
             </p>
           </div>
 
           <div className="prose prose-lg max-w-none space-y-8">
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Our Commitment to Satisfaction
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 At SHS Services Inc., we are committed to providing exceptional HVAC services that meet or exceed your expectations. We stand behind the quality of our work and want every customer to be completely satisfied. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting one.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We encourage you to contact us immediately if you have any concerns about the services provided. Many issues can be resolved quickly through direct communication with our team.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <CheckCircle className="w-6 h-6 text-accent" />
                 Eligible Refunds
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Refunds may be issued in the following circumstances:
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Service Not Performed</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If you have paid for a service that was not performed due to circumstances within our control, you are entitled to a full refund of the amount paid.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Duplicate Charges</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If you have been charged more than once for the same service, we will promptly refund the duplicate charge(s) in full.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Billing Errors</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If you have been charged incorrectly due to a billing error on our part, we will correct the error and refund any overcharge.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Unsatisfactory Service</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If our service does not meet the standards outlined in our service agreement or does not resolve the issue as promised, we will:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>First, offer to re-perform the service at no additional cost</li>
                 <li>If re-service is not possible or does not resolve the issue, provide a partial or full refund as appropriate</li>
               </ul>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Cancelled Installations</h3>
               <p className="text-foreground/80 leading-relaxed">
                 For equipment installations cancelled before work begins:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Full deposit refund if cancelled more than 7 days before scheduled installation</li>
                 <li>75% deposit refund if cancelled 3-7 days before scheduled installation</li>
                 <li>50% deposit refund if cancelled less than 3 days before scheduled installation</li>
                 <li>No refund for cancellations after installation has begun</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <XCircle className="w-6 h-6 text-accent" />
                 Non-Refundable Items
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 The following are generally not eligible for refunds:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Diagnostic Fees:</strong> Service call and diagnostic fees for completed inspections, even if you decline recommended repairs</li>
                 <li><strong>Emergency Service Fees:</strong> After-hours, weekend, and holiday service premiums</li>
                 <li><strong>Custom Orders:</strong> Specially ordered equipment or parts that are non-returnable to suppliers</li>
                 <li><strong>Consumables:</strong> Refrigerant, filters, and other consumable materials that have been used</li>
                 <li><strong>Completed Repairs:</strong> Services that have been completed to industry standards, even if the system subsequently fails due to unrelated issues</li>
                 <li><strong>Maintenance Plans:</strong> Used portions of prepaid maintenance agreements</li>
                 <li><strong>Third-Party Permits:</strong> Permit fees paid to local authorities</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Clock className="w-6 h-6 text-accent" />
                 Refund Request Timeline
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 To be eligible for a refund, you must notify us of the issue within the following timeframes:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Service Issues:</strong> Within 7 days of service completion</li>
                 <li><strong>Billing Errors:</strong> Within 30 days of receiving the invoice</li>
                 <li><strong>Installation Issues:</strong> Within 30 days of installation completion</li>
                 <li><strong>Warranty Claims:</strong> Within the applicable warranty period</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 Requests made outside these timeframes may still be considered on a case-by-case basis at our discretion.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <HelpCircle className="w-6 h-6 text-accent" />
                 How to Request a Refund
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 To request a refund, please follow these steps:
               </p>
               <ol className="list-decimal list-inside text-foreground/80 space-y-3 mt-4">
                 <li>
                   <strong>Contact Our Office:</strong> Call us at (213) 268-9542 or email info@shsofficial.com with your concern
                 </li>
                 <li>
                   <strong>Provide Documentation:</strong> Include your invoice number, date of service, and a detailed description of the issue
                 </li>
                 <li>
                   <strong>Allow for Inspection:</strong> In some cases, we may need to send a technician to inspect the work before processing a refund
                 </li>
                 <li>
                   <strong>Review Process:</strong> Our team will review your request and respond within 5-7 business days
                 </li>
                 <li>
                   <strong>Resolution:</strong> If approved, refunds will be processed within 10-14 business days
                 </li>
               </ol>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Refund Methods
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Refunds will be issued using the original payment method when possible:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Credit Card:</strong> Refund credited to the original card within 5-10 business days</li>
                 <li><strong>Check:</strong> Refund check mailed within 10-14 business days</li>
                 <li><strong>Cash:</strong> Refund issued by check</li>
                 <li><strong>Financing:</strong> Credit applied to your financing account</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <AlertCircle className="w-6 h-6 text-accent" />
                 Special Circumstances
               </h2>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">Weather-Related Delays</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If a scheduled service is delayed due to severe weather conditions, you may reschedule at no additional cost or request a refund of any deposit paid.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Equipment Returns</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Installed equipment generally cannot be returned. For equipment that has not been installed:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Standard equipment: May be returned within 30 days for a refund, minus a 15% restocking fee</li>
                 <li>Special order equipment: Non-refundable unless defective</li>
               </ul>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Warranty Repairs</h3>
               <p className="text-foreground/80 leading-relaxed">
                 If a repair covered under our labor warranty fails, we will re-perform the repair at no cost. If we are unable to resolve the issue, you may be eligible for a refund of the original repair cost.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Disputes
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 If you disagree with our decision regarding your refund request, you may:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Request a review by our management team</li>
                 <li>Contact the Better Business Bureau (BBB)</li>
                 <li>Pursue mediation or arbitration as outlined in our Terms and Conditions</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We are committed to resolving disputes fairly and promptly.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Contact Us
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 For refund requests or questions about this policy, please contact us:
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
 
 export default RefundPolicy;
 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import { FileText, AlertTriangle, Scale, Handshake, Ban, Clock } from "lucide-react";
 
 const TermsConditions = () => {
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <main className="pt-32 pb-20">
         <div className="container mx-auto px-4 max-w-4xl">
           <div className="mb-12">
             <div className="flex items-center gap-3 mb-4">
               <FileText className="w-10 h-10 text-accent" />
               <h1 className="font-display text-4xl md:text-5xl font-bold text-primary">
                 Terms & Conditions
               </h1>
             </div>
             <p className="text-muted-foreground">
               Last updated: February 5, 2026
             </p>
           </div>
 
           <div className="prose prose-lg max-w-none space-y-8">
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Handshake className="w-6 h-6 text-accent" />
                 Agreement to Terms
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Customer," "you," or "your") and SHS Services LLC ("Company," "we," "our," or "us") governing your use of our website and HVAC services.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 By accessing our website, scheduling a service, or engaging our services in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website or services.
               </p>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the modified Terms.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Services Description
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 SHS Services LLC provides heating, ventilation, and air conditioning (HVAC) services including but not limited to:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Installation of new HVAC systems and equipment</li>
                 <li>Repair and maintenance of existing systems</li>
                 <li>Emergency HVAC services</li>
                 <li>Air quality assessments and improvements</li>
                 <li>Duct cleaning and repair</li>
                 <li>Thermostat installation and programming</li>
                 <li>Energy efficiency consultations</li>
                 <li>Preventive maintenance programs</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 All services are subject to availability and may vary by location. We reserve the right to refuse service to anyone for any lawful reason.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Clock className="w-6 h-6 text-accent" />
                 Scheduling and Appointments
               </h2>
               <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">Appointment Booking</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Appointments can be scheduled through our website, by phone, or by email. We will make reasonable efforts to accommodate your preferred date and time, subject to technician availability.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Cancellation Policy</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We require at least 24 hours notice for cancellations or rescheduling. Failure to provide adequate notice may result in a cancellation fee of up to $75. No-shows may be charged the full service call fee.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Service Windows</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We provide service windows rather than exact appointment times. We will make reasonable efforts to notify you if our technician is running late. A responsible adult (18 years or older) must be present during the entire service appointment.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Scale className="w-6 h-6 text-accent" />
                 Pricing and Payment
               </h2>
               <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">Estimates</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We provide free estimates for most services. Estimates are valid for 30 days from the date issued. Actual costs may vary if the scope of work changes or additional issues are discovered during service.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Pricing</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Our pricing includes labor and standard materials unless otherwise specified. Specialty parts, equipment, or materials may be subject to additional charges. We will obtain your approval before proceeding with any work that exceeds the original estimate by more than 10%.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Payment Terms</h3>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Payment is due upon completion of service unless other arrangements have been made</li>
                 <li>We accept cash, check, and major credit cards (Visa, MasterCard, American Express, Discover)</li>
                 <li>For large installations, we may require a deposit of up to 50% before work begins</li>
                 <li>Financing options may be available for qualifying customers</li>
                 <li>Past due accounts may be subject to a 1.5% monthly interest charge</li>
                 <li>Collection costs, including attorney fees, may be added to delinquent accounts</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Warranties and Guarantees
               </h2>
               <h3 className="font-display text-xl font-semibold text-primary mt-4 mb-3">Labor Warranty</h3>
               <p className="text-foreground/80 leading-relaxed">
                 We warrant our workmanship for a period of one (1) year from the date of service completion. This warranty covers defects in installation and repair work performed by our technicians.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Equipment Warranty</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Equipment and parts are covered by the manufacturer's warranty, which varies by product. We will assist you in processing warranty claims with manufacturers. Extended warranties may be available for purchase.
               </p>
               
               <h3 className="font-display text-xl font-semibold text-primary mt-6 mb-3">Warranty Exclusions</h3>
               <p className="text-foreground/80 leading-relaxed">
                 Warranties do not cover:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Damage caused by neglect, misuse, or lack of maintenance</li>
                 <li>Damage caused by acts of nature, power surges, or other external factors</li>
                 <li>Modifications or repairs made by others</li>
                 <li>Normal wear and tear</li>
                 <li>Consequential or incidental damages</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <AlertTriangle className="w-6 h-6 text-accent" />
                 Limitation of Liability
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHS SERVICES LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Loss of profits, revenue, or business opportunities</li>
                 <li>Loss of data or equipment use</li>
                 <li>Personal injury or property damage beyond our direct control</li>
                 <li>Damages arising from service delays or interruptions</li>
               </ul>
               <p className="text-foreground/80 leading-relaxed mt-4">
                 Our total liability for any claim arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Customer Responsibilities
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 As a customer, you agree to:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Provide accurate information about your property and HVAC systems</li>
                 <li>Ensure safe and clear access to work areas</li>
                 <li>Secure pets during service appointments</li>
                 <li>Notify us of any known hazards (asbestos, mold, electrical issues, etc.)</li>
                 <li>Maintain your HVAC system according to recommended guidelines</li>
                 <li>Replace filters regularly as recommended</li>
                 <li>Report any issues or concerns promptly</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                 <Ban className="w-6 h-6 text-accent" />
                 Prohibited Uses
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 You agree not to use our website or services to:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li>Violate any applicable laws or regulations</li>
                 <li>Infringe on intellectual property rights</li>
                 <li>Transmit harmful code or malware</li>
                 <li>Engage in fraudulent activities</li>
                 <li>Harass or threaten our employees or representatives</li>
                 <li>Interfere with the operation of our website</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Intellectual Property
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 All content on our website, including text, graphics, logos, images, and software, is the property of SHS Services LLC or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Dispute Resolution
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 Any disputes arising from these Terms or our services shall be resolved as follows:
               </p>
               <ul className="list-disc list-inside text-foreground/80 space-y-2 mt-3">
                 <li><strong>Informal Resolution:</strong> We encourage you to contact us first to resolve any issues informally</li>
                 <li><strong>Mediation:</strong> If informal resolution fails, disputes may be submitted to mediation</li>
                 <li><strong>Arbitration:</strong> Unresolved disputes shall be settled by binding arbitration in accordance with Virginia law</li>
                 <li><strong>Governing Law:</strong> These Terms are governed by the laws of the Commonwealth of Virginia</li>
               </ul>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Severability
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
               </p>
             </section>
 
             <section className="bg-card rounded-2xl p-8 border">
               <h2 className="font-display text-2xl font-bold text-primary mb-4">
                 Contact Information
               </h2>
               <p className="text-foreground/80 leading-relaxed">
                 For questions about these Terms and Conditions, please contact us:
               </p>
               <div className="mt-4 p-4 bg-muted rounded-xl">
                 <p className="text-foreground font-semibold">SHS Services LLC</p>
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
 
 export default TermsConditions;
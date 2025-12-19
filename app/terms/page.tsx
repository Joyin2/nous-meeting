'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";

export default function TermsOfUse() {
  return (
    <div className="font-sans min-h-screen text-zinc-800 dark:text-white selection:bg-nous-blue selection:text-white">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_1200px_at_50%_0%,rgba(66,47,155,0.15),transparent)]"></div>
            
            <Tilt3D className="mx-auto max-w-4xl px-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-6xl animate-rise text-glow mb-4">
                Terms of <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">Use</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                    Version 1.0 • August 15th, 2025
                </p>
            </Tilt3D>
        </section>

        {/* Content Section */}
        <section className="py-24 px-6">
             <div className="mx-auto max-w-4xl">
                <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-nous-blue dark:prose-a:text-nous-pink prose-img:rounded-xl max-w-none">
                    <div className="bg-white dark:bg-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-sm">
                        
                        <p className="lead font-bold">
                            PLEASE READ THESE TERMS OF USE (&quot;TERMS&quot;) CAREFULLY BEFORE USING THIS WEBSITE OR APPLICATION. BY ACCESSING OR USING THE NOUS MEETING WEBSITE OR APPLICATION, INCLUDING ALL SUBPAGES (&quot;NOUS MEETING&quot;), YOU FULLY UNDERSTAND, ACKNOWLEDGE, AND AGREE TO BE BOUND BY THESE TERMS.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">I. USE OF NOUS MEETING</h2>
                        <h3 className="text-xl font-semibold mt-6 mb-2">A. Lawful Use</h3>
                        <p>
                            You agree to use Nous Meeting only for lawful purposes and are responsible for understanding and complying with all applicable laws, regulations, and rules. By accessing or using Nous Meeting, you agree not to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Use Nous Meeting for any criminal activity.</li>
                            <li>Engage in actions that may result in civil liability.</li>
                            <li>Impersonate any person, entity, or organization.</li>
                            <li>Upload, transmit, or introduce any viruses, Trojan horses, or other harmful code that may damage or disrupt Nous Meeting or its users’ systems.</li>
                            <li>Upload, post, email, or otherwise transmit content you are not legally authorized to share.</li>
                            <li>Modify, delete, or damage any content posted on Nous Meeting.</li>
                            <li>Disrupt or interfere with Nous Meeting, its servers, or its networks.</li>
                            <li>Falsely claim affiliation with any business, organization, or entity without proper authorization.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Account Suspension</h3>
                        <p>
                            Nous Meeting reserves the right to suspend any account or restrict access if it has reasonable grounds to believe the account is being used for prohibited activities as outlined above. If contact information is provided (such as an email or physical address), a notice of suspension will be sent to one of the addresses on file.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">II. PASSWORDS AND ACCOUNT SECURITY</h2>
                        <h3 className="text-xl font-semibold mt-6 mb-2">A. Account Security</h3>
                        <p>
                            You are responsible for maintaining the confidentiality of your Nous Meeting account password and any related login information.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Accountability</h3>
                        <p>
                            You accept full responsibility for all actions taken under your account.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">C. Unauthorized Use</h3>
                        <p>
                            If you suspect or become aware of any unauthorized use of your account, you must immediately notify Nous Meeting via the “Forgot Password” page or by email.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">D. Account Suspension for Violation</h3>
                        <p>
                            Nous Meeting reserves the right to suspend your account if it is determined that your account has been used in violation of these Terms.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">III. USER-PROVIDED INFORMATION</h2>
                        <p>
                            To access certain features of Nous Meeting, you may need to provide personal information. You agree that all information you provide to Nous Meeting is accurate, truthful, and current. For details on how Nous Meeting handles your information, please refer to our Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">IV. INTELLECTUAL PROPERTY RIGHTS</h2>
                        <h3 className="text-xl font-semibold mt-6 mb-2">A. Ownership</h3>
                        <p>
                            Nous Meeting respects intellectual property rights and expects users to do the same. Service marks, trademarks, and content from third-party linked sites belong to their respective owners (which may include Nous Meeting). All other elements of Nous Meeting, including design, text, graphics, images, interfaces, software, and their arrangement, are owned by Nous Meeting (a property of Next Generation Innovation, L.L.C.). All rights are reserved.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Copyright Infringement (DMCA Takedown)</h3>
                        <p>
                            If you believe your copyrighted work has been unlawfully copied on Nous Meeting, you may file a DMCA notice with our designated agent by providing the following details:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>An authorized signature of the copyright holder or their representative</li>
                            <li>A description of the copyrighted work that you claim has been infringed</li>
                            <li>The location of the allegedly infringing material on the platform</li>
                            <li>Your contact information (address, phone number, email)</li>
                            <li>A statement that you believe the use is unauthorized</li>
                            <li>A declaration of accuracy and that you are authorized to act on behalf of the copyright owner</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">C. Counter-Notice</h3>
                        <p>
                            If your content was removed via a DMCA takedown, you may submit a counter-notice to our designated agent with:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Your signature</li>
                            <li>A description and former location of the removed material</li>
                            <li>A statement under oath that the removal was due to an error or misidentification</li>
                            <li>Your contact details and consent to jurisdiction (where you reside or in any U.S. district if outside the U.S.), as well as consent to accept legal service from the original complainant</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">D. DMCA Agent</h3>
                        <p className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border-l-4 border-nous-pink">
                            Mohammed Abdun Noor<br/>
                            Address: 17-101st Avenue, Brooklyn, New York 11208, USA<br/>
                            Email: <a href="mailto:noor.glocal@gmail.com">noor.glocal@gmail.com</a>
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">V. EXTERNAL WEBSITE LINKS</h2>
                        <p>
                            Nous Meeting may include links to third-party websites. We do not endorse, guarantee the accuracy of, or support the opinions expressed on these external sites. Third-party applications such as Zoom, Google Meet, and TeamViewer operate independently under their own policies. Please contact these services directly for any inquiries about their content.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">VI. SERVICE DISCLAIMERS</h2>
                        <h3 className="text-xl font-semibold mt-6 mb-2">A. No Warranties</h3>
                        <p>
                            Nous Meeting and its content are provided &quot;as is&quot; and &quot;as available&quot; without any warranties. We make no guarantees regarding the quality, accuracy, completeness, currency, or uninterrupted service of the platform or its materials.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Limitation of Liability</h3>
                        <p>
                            Nous Meeting is not liable for any special, indirect, incidental, or consequential damages resulting from your use or inability to use the platform, even if foreseeable.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">C. Risk of Downloads</h3>
                        <p>
                            Any materials you download from Nous Meeting are at your own risk. You accept full responsibility for any damage to your device or data loss resulting from such downloads.
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-2">D. Changes to Policy</h3>
                        <p>
                            Nous Meeting’s Privacy Policy, Terms of Use, and other updates are made periodically. The information on our platform may not immediately reflect these changes.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">VII. MISCELLANEOUS TERMS</h2>
                        <h3 className="text-xl font-semibold mt-6 mb-2">A. Legal Advice</h3>
                        <p>Nothing in these Terms or on Nous Meeting constitutes legal advice.</p>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-2">B. Non-Waiver</h3>
                        <p>If Nous Meeting does not enforce any rights under these Terms, it does not waive those rights.</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">C. Severability</h3>
                        <p>If any provision of these Terms is found to be invalid, that provision will be removed, but the rest will remain in full force.</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">D. Governing Law</h3>
                        <p>These Terms and your relationship with Nous Meeting are governed by the laws of New York State. Claims must be heard in Brooklyn County, New York.</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">E. Modifications</h3>
                        <p>Nous Meeting may revise these Terms at any time. Continued use indicates acceptance of the updated Terms.</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">F. Complete Agreement</h3>
                        <p>These Terms and the Privacy Policy form the entire agreement between you and Nous Meeting.</p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">G. Technical Inquiries</h3>
                        <p>For technical inquiries, contact <a href="mailto:support@nousmeeting.com">support@nousmeeting.com</a></p>

                    </div>
                </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
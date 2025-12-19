'use client'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tilt3D from "../components/Tilt3D";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen text-zinc-800 dark:text-white selection:bg-nous-blue selection:text-white">
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="relative flex items-center justify-center overflow-hidden pt-32 pb-16">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(1200px_1200px_at_50%_0%,rgba(66,47,155,0.15),transparent)]"></div>
            
            <Tilt3D className="mx-auto max-w-4xl px-6 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-zinc-800 dark:text-white sm:text-6xl animate-rise text-glow mb-4">
                Privacy <span className="bg-gradient-to-r from-nous-blue to-nous-pink bg-clip-text text-transparent">Policy</span>
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
                        
                        <p className="lead">
                            Welcome to Nous Meeting’s website and application. Nous Meeting provides an AI-powered smart meeting assistant designed to record, transcribe, summarize, extract action items, analyze speaker sentiment, prepare reports, and manage follow-ups. The service caters to a wide range of users, regardless of their professional background or personal needs. Additionally, the platform aims to make learning about Nous Meeting’s application and business activities easier and facilitate communication with the platform.
                        </p>
                        <p>
                            We recognize the importance of privacy, and we are committed to protecting your personal information. This Privacy Policy outlines how Nous Meeting collects, uses, and safeguards your data when you interact with our website and application.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Applicability of This Policy</h2>
                        <p>
                            This Privacy Policy applies solely to Nous Meeting’s website and application. If you visit any third-party websites or applications through our platform, we advise you to review their respective privacy policies.
                        </p>
                        <p className="text-sm bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border-l-4 border-nous-blue">
                            For the purposes of this policy, “Nous Meeting” refers to the application owned by Next Generation Innovation L.L.C., a company registered in the State of New York as a limited liability company.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Personal Information</h2>
                        <p>
                            “Personal information” refers to any information that can be used to identify an individual, such as name, date of birth, address, phone number, voice recordings, emotions, and sentiments. This also includes identifiable information related to a juridical entity.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Information We Collect</h2>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-2">1. Personal Information</h3>
                        <p>
                            Nous Meeting may collect personal information when users interact with the platform, such as during registration, completing surveys, transactions, or when submitting information via email.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">2. Automatically Collected Information</h3>
                        <p>We may automatically collect the following non-personally identifiable information when you visit our website or use our application:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Domain name and IP address</li>
                            <li>Browser type and operating system</li>
                            <li>Date and time of visit</li>
                            <li>Pages and services accessed</li>
                            <li>Referring websites and exit pages</li>
                            <li>Forms or documents downloaded</li>
                        </ul>
                        <p className="mt-2">
                            This data is used to improve the functionality of the website, understand user interaction, and for statistical analysis. Rest assured, Nous Meeting does not sell or disclose this information for commercial purposes.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h3>
                        <p>
                            Nous Meeting uses “persistent” and “session” cookies, which store data temporarily for the duration of your visit or longer, depending on your browser settings. You can manage cookie preferences through your browser settings, though disabling certain cookies may impact your ability to use some website features.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">4. Text Message Data</h3>
                        <p>
                            We may retain text message data provided via the website for an indefinite period.
                        </p>


                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Information Collected During User Interaction</h2>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-2">1. Personal Information during Registration</h3>
                        <p>When registering for an account, we may collect the following personal information:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Name, email address, phone number (optional), and login credentials</li>
                            <li>Profile details such as job title or organization name (optional)</li>
                            <li>Meeting-related data if you schedule or host meetings (e.g., meeting title, participant list, scheduled time)</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">2. Billing Information</h3>
                        <p>
                            For users who purchase premium plans, billing information (e.g., credit card details) is securely processed through third-party payment processors.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">3. Usage Data</h3>
                        <p>We automatically collect device and technical information to improve platform performance, including:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP address, browser type, operating system, and device identifiers</li>
                            <li>Meeting activity, including participation time, features used (e.g., screen sharing, chat), and meeting duration</li>
                        </ul>

                        <h3 className="text-xl font-semibold mt-6 mb-2">4. User-Generated Content</h3>
                        <p>
                            Any content shared during meetings (such as audio, video, chat messages, screen shares, uploaded files) may be collected and stored based on your preferences. Support communications and feedback are also recorded to enhance our services.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Information Provided via Email</h2>
                        <p>
                            When you email Nous Meeting, the email address and its contents (including text, audio, video, or images) are collected. This information is used to respond to inquiries, improve the website, and address any issues. Nous Meeting does not sell or disclose email data for commercial purposes.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Information Use and Disclosure</h2>
                        
                        <h3 className="text-xl font-semibold mt-6 mb-2">1. Use of Information</h3>
                        <p>
                            The information collected is used to operate and improve our services, fulfil transactions, and enhance user experience. We may disclose this information for operational purposes, but never for commercial sale.
                        </p>

                        <h3 className="text-xl font-semibold mt-6 mb-2">2. Compliance with Laws</h3>
                        <p>
                            Nous Meeting complies with U.S. state and federal laws. We may disclose personal information as required by law, including in response to legal processes, or to protect our intellectual property and ensure the integrity of our platform.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Child Privacy</h2>
                        <p>
                            Nous Meeting does not knowingly collect information from children. We strongly advise parents or guardians to monitor their children’s online activity and ensure that children are not submitting personal information without supervision.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Security and Confidentiality</h2>
                        <p>
                            We are committed to safeguarding your personal information against unauthorized access or disclosure. Nous Meeting employs security measures to protect your data, including contractual obligations with employees to ensure data integrity and confidentiality.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">External Links</h2>
                        <p>
                            Nous Meeting may provide links to third-party applications or websites. Please be aware that once you leave our platform, you are subject to the privacy policies of those external sites. We do not endorse the content, services, or privacy practices of external sites.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">Changes to This Privacy Policy</h2>
                        <p>
                            Nous Meeting reserves the right to modify this Privacy Policy at any time. Users should periodically review this policy to stay informed of any changes.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-zinc-800 dark:text-white">User Responsibility</h2>
                        <p>
                            We encourage users to carefully protect their personal information, including login credentials and any sensitive data submitted through the website.
                        </p>
                    </div>
                </div>
             </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
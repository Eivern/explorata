import React from 'react'
import { Link, Head, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Terms(props) {
  return (
    <>
      <Head title='Terms and Conditions' />
      <GuestLayout user={props.auth.user}>
        <div className="main-container min-h-screen pt-16 pb-32">
          <div className="relative w-full p-8 bg-white rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>

            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using the "Explorata" website, you acknowledge and agree to the following terms and conditions. These terms govern your use of the website and any services or information provided through it. If you do not agree to these terms, please refrain from using the website.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Intellectual Property</h2>
              <p>
                All intellectual property rights, including copyrights, trademarks, and any other proprietary rights associated with the "Explorata" website and its contents, belong to Explorata or its respective owners. This includes but is not limited to text, graphics, logos, images, and software. You may not use, reproduce, or distribute any materials from the website without obtaining prior written permission from the rightful owner.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Use of the Website</h2>
              <p>
                The "Explorata" website is designed to help users discover and explore various destinations. You agree to use the website in a lawful and responsible manner, refraining from any actions that may cause harm, disruption, or unauthorized access to the website. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Not attempting to gain unauthorized access to any part of the website, server, or network.
                </li>
                <li>
                  Not engaging in any activity that could damage, disable, or impair the website's functionality or interfere with other users' access and use of the website.
                </li>
                <li>
                  Not using the website to distribute or transmit any harmful viruses, malware, or any other malicious code.
                </li>
                <li>
                  Not engaging in any activity that violates applicable laws, regulations, or the rights of others.
                </li>
              </ul>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Third-Party Links</h2>
              <p>
                The "Explorata" website may contain links to third-party websites for additional information or convenience. Explorata is not responsible for the content, accuracy, or availability of these external websites. You acknowledge and agree that you access these third-party websites at your own risk and that the terms and conditions of those websites will apply to your use of their services.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Disclaimer of Warranties</h2>
              <p>
                The "Explorata" website is provided on an "as is" and "as available" basis. Explorata makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or suitability of the website for any purpose. Explorata does not guarantee that the website will be error-free, secure, or continuously available. You acknowledge and agree that your use of the website is at your own risk.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Explorata or its respective employees, directors, officers, or partners be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the "Explorata" website or its contents. This includes, but is not limited to, damages for loss of profits, goodwill, data, or other intangible losses, even if advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for incidental or consequential damages, so the above limitations may not apply to you.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Modifications to the Terms</h2>
              <p>
                Explorata reserves the right to modify these terms and conditions at any time without prior notice. Any modifications will be effective immediately upon posting on the website. By continuing to use the website after any modifications, you agree to be bound by the updated terms and conditions. It is your responsibility to review the terms and conditions periodically for any changes.
              </p>
            </div>
            <div className="grid gap-3">
              <h2 className="text-xl font-bold mt-8 mb-4">Governing Law and Jurisdiction</h2>
              <p>
                These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction where Explorata is based. Any disputes arising from the use of the "Explorata" website shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
            </div>
            <p className='mt-10 mb-4 '>
              By using the "Explorata" website, you agree to comply with these terms and conditions. If you have any questions or concerns regarding these terms, please contact Explorata for further assistance.
            </p>
          </div>
        </div>
      </GuestLayout>
    </>
  )
}

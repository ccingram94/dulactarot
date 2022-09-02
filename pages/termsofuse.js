import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsOfUse() {
  return (
    <div>
      <Head>
        <title>Dulac Tarot</title>
        <meta name="Terms of Use" content="explore our terms of use" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-yellow-200 text-black w-screen min-h-screen font-montserrat flex flex-col items-center">
        <div className="bg-floral bg-center bg-cover w-screen">
          <h2 className="text-4xl text-black lg:text-6xl font-bebas text-center p-2 pt-12 bg-yellow-200 bg-opacity-60">Terms of Use </h2>
          <p className="text-md lg:text-lg text-black text-center p-2 bg-yellow-200 bg-opacity-60">last updated September 2, 2022</p>
        </div>
        <div className="flex flex-col justify-center p-2 m-4">
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h2 className="p-2 font-bebas text-xl lg:text-3xl">Dulac Tarot Terms of Use</h2>
              <p className="p-2">Dulac Tarot operates dulactarot.com, which provides tarot card readings online.  These readings are <b>entertainment only</b> and not to be taken as medical, legal, or other professional advice.</p>
              <p className="p-2"><b>By accessing or using our website or services, you agree to these Terms of Use, as well as our Privacy Policy.</b>  <Link href="/privacypolicy"><u>You may access our privacy policy by clicking this link.</u></Link>  By accessing or using our services you are bound by the terms and conditions set out within this policy.  If you disagree with these terms and conditions, you may not use or access our website or service.</p>
              <p className="p-2">We reserve the right to update the terms of use for Dulac Tarot at any time.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">Children's Privacy</h3>
              <p className="p-2">By accessing or using this site, you represent that you are over the age of 18.  Dulac Tarot does not permit those under 18 to use this service.  We do not knowingly collect personal identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information or accessed our service, we reserve the right to terminate the user account and delete relevant information from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h2 className="p-2 font-bebas text-xl lg:text-3xl">Third Party Sites</h2>
              <p>Our website or service may contain links to third-party sites or services that are not owned or controlled by Dulac Tarot.</p>
              <p className="p-2">We have no control over and do not assume responsibility for the content, privacy policies, or practices of any third party website or service.  You acknowledge and agree that Dulac Tarot is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to have caused by or in connection with the use or reliance of any such content, goods, or services available on or through any such website or service.</p>
              <p>We strongly advise you to read the terms and conditions and privacy policies or any third-party website or service that you visit.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h2 className="p-2 font-bebas text-xl lg:text-3xl">Termination</h2>
              <p className="p-2">We reserve the right to terminate or suspend access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the conditions of our terms of use.  Upon termination, your right to use our services or website will cease immediately.  Users may not do or attempt to do anything which is unlawful, prohibited by any laws applicable to our site, inappropriate, harassing, or that would otherwise bring our website and service into disrepute.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">Governing Law</h3>
              <p className="p-2">Dulac Tarot operates within the United States the laws thereof.  The laws of the United States shall govenr these terms and your use of our service and website.  Your use of our services or website may also be subject to other local, state, national, or international laws.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">Disputes Resolution</h3>
              <p className="p-2">If you have any concern or dispute about our service or website, you agree to first try to resolve the dispute informally by contacting us.  You may reach us at hello@dulactarot.com.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">For European Union Users</h3>
              <p className="p-2">If you are a European Union user or visitor, you will benefit from any mandatory provisions of the law of the country in which you reside.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">United States Legal Compliance</h3>
              <p className="p-2">You represent and warrant that you are not located in a country that is subject to the United States government embargo or that has been designated by the United States government as a "terrorist supporting" country.</p>
              <p className="p-2">You represent and warrant that you are not listed on any United States government list of prohibited or restricted parties.</p>
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">Severability and Waiver</h3>
              <p className="p-2">SEVERABILITY: If any provision of these terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
              <p className="p-2">WAIVER: Except as provided herein, the failure to exercise a right or to require performance of an obligation under these terms shall not effect a party's abilty to exercise such a right or require such a performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>     
            </div>
            <div className="p-2 m-2 lg:max-w-[50vw]">
              <h3 className="p-2 font-bebas text-xl lg:text-3xl">Contact Us</h3>
              <p className="p-2">If you have any questions or suggestions about our Terms of Use or Privacy Policy, do not hesitate to contact us at hello@dulactarot.com.</p>
            </div>
        </div>
      </main>
    </div>
  )
}

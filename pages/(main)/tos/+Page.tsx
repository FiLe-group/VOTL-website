import {chakra, Link, List, Text, VStack} from "@chakra-ui/react";
import {Head} from "vike-react/Head";

const TextHeading = chakra("h2", {
  base: {
    fontWeight: "bold",
    color: "white",
    marginTop: "4",
  }
});

export default function Page() {
  return (
    <>
      <Head>
        <title>Terms | VOTL Bot</title>
      </Head>

      <Text as='h1' fontSize='3xl' fontWeight='semibold' mt={4}>Terms of Services</Text>
      <Text fontSize='sm' color='white/30'>Last Update: 23/05/2026</Text>
      <VStack color='white/60' mt={5} gap={2} alignItems='start'>
        <TextHeading>AGREEMENT TO OUR LEGAL TERMS</TextHeading>
        <Text>We are FiLe group ('Company', 'we', 'us', or 'our').</Text>
        <Text>We operate the website <Link color='white' href="https://votl.fileeditor.dev/">votl.fileeditor.dev</Link> (the 'Site') and Discord Application ('Voice of the Lord', 'VOTL Bot', or 'Bot'), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</Text>
        <Text>You can contact us by email at <u>votl@fileeditor.dev</u>.</Text>
        <Text>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and FiLe group, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</Text>
        <Text>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</Text>
        <Text>The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</Text>

        <TextHeading id="services">1. OUR SERVICES</TextHeading>
        <Text>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</Text>

        <TextHeading id="property">2. INTELLECTUAL PROPERTY RIGHTS</TextHeading>
        <Text as='h3' fontWeight='bold' color='white' mt={2}>Our intellectual property</Text>
        <Text>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</Text>
        <Text>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.</Text>
        <Text>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</Text>
        <Text as='h3' fontWeight='bold' color='white' mt={2}>Your use of our Services</Text>
        <Text>Subject to your compliance with these Legal Terms, including the '<Link color='white' href={"#prohibited"}>PROHIBITED ACTIVITIES</Link>' section below, we grant you a non-exclusive, non-transferable, revocable license to:</Text>
        <List.Root pl={4}>
          <List.Item>access the Services; and</List.Item>
          <List.Item>download or print a copy of any portion of the Content to which you have properly gained access.</List.Item>
        </List.Root>
        <Text>solely for your personal, non-commercial use or internal business purpose.</Text>
        <Text>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</Text>
        <Text>If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to <u>votl@fileeditor.dev</u>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</Text>
        <Text as='h3' fontWeight='bold' color='white' mt={2}>Your submissions</Text>
        <Text>Please review this section and the '<Link color='white' href={"#prohibited"}>PROHIBITED ACTIVITIES</Link>' section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.</Text>
        <Text><b>Submissions:</b> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</Text>
        <Text><b>You are responsible for what you post or upload:</b> By sending us Submissions through any part of the Services you:</Text>
        <List.Root pl={4}>
          <List.Item>confirm that you have read and agree with our '<Link color='white' href={"#prohibited"}>PROHIBITED ACTIVITIES</Link>' and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</List.Item>
          <List.Item>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</List.Item>
          <List.Item>warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</List.Item>
          <List.Item>warrant and represent that your Submissions do not constitute confidential information.</List.Item>
        </List.Root>
        <Text>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party's intellectual property rights, or (c) applicable law.</Text>

        <TextHeading id="representations">3. USER REPRESENTATIONS</TextHeading>
        <Text>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.</Text>
        <Text>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</Text>

        <TextHeading id="prohibited">4. PROHIBITED ACTIVITIES</TextHeading>
        <Text>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</Text>
        <Text>As a user of the Services, you agree not to:</Text>
        <List.Root pl={4}>
          <List.Item>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</List.Item>
          <List.Item>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords or tokens.</List.Item>
          <List.Item>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</List.Item>
          <List.Item>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</List.Item>
          <List.Item>Use any information obtained from the Services in order to harass, abuse, or harm another person.</List.Item>
          <List.Item>Make improper use of our support services or submit false reports of abuse or misconduct.</List.Item>
          <List.Item>Use the Services in a manner inconsistent with any applicable laws or regulations.</List.Item>
          <List.Item>Engage in unauthorized framing of or linking to the Services</List.Item>
          <List.Item>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</List.Item>
          <List.Item>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</List.Item>
          <List.Item>Delete the copyright or other proprietary rights notice from any Content.</List.Item>
          <List.Item>Attempt to impersonate another user or person or use the username of another user.</List.Item>
          <List.Item>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").</List.Item>
          <List.Item>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</List.Item>
          <List.Item>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</List.Item>
          <List.Item>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</List.Item>
          <List.Item>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</List.Item>
          <List.Item>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.</List.Item>
          <List.Item>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</List.Item>
        </List.Root>

        <TextHeading id="usercontent">5. USER GENERATED CONTRIBUTIONS</TextHeading>
        <Text>We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:</Text>
        <List.Root pl={4}>
          <List.Item>you are legal allowed to do so; and</List.Item>
          <List.Item>you are not infringing any statutory provisions and/or third-party rights.</List.Item>
        </List.Root>

        <TextHeading id="contribution">6. CONTRIBUTION LICENSE</TextHeading>
        <Text>You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).</Text>
        <Text>By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</Text>
        <Text>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</Text>

        <TextHeading id="management">7. SERVICES MANAGEMENT</TextHeading>
        <Text>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</Text>

        <TextHeading id="privacy">8. PRIVACY POLICY</TextHeading>
        <Text>We care about data privacy and security. Please review our Privacy Policy: <Link color='white' href={"/privacy"}>https://votl.fileeditor.dev/privacy</Link>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms. We do not knowingly accept, request, or solicit information from children or knowingly market to children. Therefore, if we receive actual knowledge that anyone under the age of 13 has provided personal information to us without the requisite and verifiable parental consent, we will delete that information and restrict further access to the Services as quickly as is reasonably practical..</Text>

        <TextHeading id="restriction">9. TERM AND RESTRICTIONS</TextHeading>
        <Text>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</Text>
        <Text>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</Text>

        <TextHeading id="modification">10. MODIFICATIONS AND INTERRUPTIONS</TextHeading>
        <Text>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</Text>
        <Text>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</Text>

        <TextHeading id="law">11. GOVERNING LAW</TextHeading>
        <Text>These Legal Terms shall be governed by and defined following the laws of Latvia. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law in your country to residence. We and yourself both agree to submit to the non-exclusive jurisdiction of the courts of Riga, Latvia, which means that you may make a claim to defend your consumer protection rights in regards to these Legal Terms in Latvia, or in the EU country in which you reside.</Text>

        <TextHeading id="dispute">12. DISPUTE RESOLUTION</TextHeading>
        <Text>The European Commission provides an <Link color='white' href="https://ec.europa.eu/consumers/odr">online dispute resolution platform</Link>, which you can access. If you would like to bring this subject to our attention, please contact us.</Text>

        <TextHeading id="correction">13. CORRECTIONS</TextHeading>
        <Text>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</Text>

        <TextHeading id="disclaimer">14. DISCLAIMER</TextHeading>
        <Text>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR DISCORD APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR DISCORD APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</Text>

        <TextHeading id="limitation">15. LIMITATIONS OF LIABILITY</TextHeading>
        <Text>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR . CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</Text>

        <TextHeading id="indemnification">16. INDEMNIFICATION</TextHeading>
        <Text>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</Text>

        <TextHeading id="data">17. USER DATA</TextHeading>
        <Text>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</Text>

        <TextHeading id="electronic">18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</TextHeading>
        <Text>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</Text>

        <TextHeading id="misc">19. MISCELLANEOUS</TextHeading>
        <Text>These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.</Text>

        <TextHeading id="contact">20. CONTACT US</TextHeading>
        <Text>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us by an email at <u>votl@fileeditor.dev</u>.</Text>
      </VStack>
    </>
  );
}
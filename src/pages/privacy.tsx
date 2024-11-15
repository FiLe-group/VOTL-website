import { Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/layout";
import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import AppLayout from "@/components/layout/app";

const PrivacyPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Privacy | VOTL bot</title>
      </Head>

      <Text as='h1' fontSize='3xl' fontWeight='semibold' mt={4}>Privacy Policy</Text>
      <Text fontSize='sm' textColor='white.30'>Last Update: 06/07/2024</Text>
      <VStack textColor='white.60' mt={5} spacing={2} alignItems='start'>
        <Text>This privacy notice for FiLe group ('VOTL', 'we', 'us', or 'our'), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you:</Text>
        <UnorderedList pl={4}>
          <ListItem>Visit our website <Link textColor='white' href='https://votl.fileeditor.dev/'>votl.fileeditor.dev</Link>, or any website of ours that links to this privacy notice</ListItem>
          <ListItem>Use our Discord application ('Voice of the Lord', 'Bot', or 'VOTL bot'), or any other Discord application of ours that links to this privacy notice</ListItem>
          <ListItem>Participate in the same Discord server in which the Bot is operated</ListItem>
        </UnorderedList>
        <Text><b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us by using the contact details provided in the section '<Link textColor='white' href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>' below.</Text>
        
        <Text as='h2' fontWeight='bold' textColor='white' mt={4}>SUMMARY OF KEY POINTS</Text>
        <Text fontStyle='italic'>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point.</Text>
        <Text><b>What personal information do we process?</b> We do not process personal information.</Text>
        <Text><b>Do we process any sensitive personal information?</b> We do not process sensitive personal information.</Text>
        <Text><b>Do we receive any information from third parties?</b> We do not receive any information from third parties.</Text>
        <Text><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <Link textColor='white' href="#infouse">how we process your information</Link>.</Text>
        <Text><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. Learn more about <Link textColor='white' href="#whoshare">when and with whom we share your personal information</Link>.</Text>
        <Text><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <Link textColor='white' href="#privacyrights">your privacy rights</Link>.</Text>
        <Text><b>How do you exercise your rights?</b> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</Text>
      
        <Text id="infocollect" as='h2' fontWeight='bold' textColor='white' mt={4}>1. WHAT INFORMATION DO WE COLLECT?</Text>
        <Text as='h3' fontWeight='bold' textColor='white' mt={2}>Information we may collect using the Bot</Text>
        <Text>We collect information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us. We also collect information provided by Discord services about your interaction with our Services. The information we collect may include the following:</Text>
        <UnorderedList pl={4}>
          <ListItem>User IDs, tags and usernames (for functionality)</ListItem>
          <ListItem>Server IDs (for functionality)</ListItem>
          <ListItem>Channel IDs (for functionality)</ListItem>
          <ListItem>Role IDs (for functionality)</ListItem>
          <ListItem>Webhook IDs and tokens (for functionality)</ListItem>
          <ListItem>Message ID, it's content and attachment name (for functionality; is usually inaccessible, message contents is stored for maximum of 1 week)</ListItem>
          <ListItem>SteamIDs (Exclusively for UnionTeam's bot, provided via third-party; for functionality)</ListItem>
          <ListItem>Any user supplied content that can include text (for functionality)</ListItem>
        </UnorderedList>

        <Text id="infouse" as='h2' fontWeight='bold' textColor='white' mt={4}>2. HOW DO WE PROCESS YOUR INFORMATION?</Text>
        <Text>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. Reasons include:</Text>
        <UnorderedList pl={4}>
          <ListItem><b>To facilitate account authentication and management.</b> We may process your information so you can edit your personal information, including personal settings.</ListItem>
          <ListItem><b>To deliver and facilitate delivery of services to the user.</b> We may process your information to provide you with the requested service.</ListItem>
          <ListItem><b>To respond to user inquiries/offer support to users.</b> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</ListItem>
          <ListItem><b>To enable user-to-user communications.</b> We may process your information if you choose to use any of our offerings that allow for communication with another user.</ListItem>
          <ListItem><b>To protect our Services.</b> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</ListItem>
          <ListItem><b>To save or protect an individual's vital interest.</b> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</ListItem>
        </UnorderedList>
        <Text>We may send you a message through the Discord platform regarding information you have provided using our Services.</Text>

        <Text id="legalbases" as='h2' fontWeight='bold' textColor='white' mt={4}>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</Text>
        <Text>We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</Text>
        <Text>If you are a resident of the European Union, United Kingdom, Lichtenstein, Norway, or Iceland, you may have additional rights under the EU General Data Protection Regulation (the 'GDPR') with respect to your Personal Data. In this event, please refer to our GDPR Privacy Notice, as it applies to you too. More: <Link textColor='white' href="https://gdpr.eu/what-is-gdpr/">https://gdpr.eu/what-is-gdpr/</Link></Text>

        <Text id="whoshare" as='h2' fontWeight='bold' textColor='white' mt={4}>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</Text>
        <Text>We do not share or sell your personal information for advertising or marketing purposes. Additionally, we do not share your personally identifying information with any third-parties, except when it is required by law.</Text>

        <Text id="inforetain" as='h2' fontWeight='bold' textColor='white' mt={4}>5. HOW LONG DO WE KEEP YOUR INFORMATION?</Text>
        <Text>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</Text>

        <Text id="privacyrights" as='h2' fontWeight='bold' textColor='white' mt={4}>6. WHAT ARE YOUR PRIVACY RIGHTS?</Text>
        <Text>In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section '<Link textColor='white' href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>' below.</Text>
        <Text>We will consider and act upon any request in accordance with applicable data protection laws.</Text>
        <Text>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <Link textColor='white' href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">Member State data protection authority</Link> or <Link textColor='white' href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">UK data protection authority</Link>.</Text>
        <Text>If you are located in Switzerland, you may contact the <Link textColor='white' href="https://www.edoeb.admin.ch/edoeb/en/home.htmlindex_en.htm">Federal Data Protection and Information Commissioner</Link>.</Text>
        <Text><b>Withdrawing your consent:</b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section '<Link className="text-white" href="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>' below.</Text>
        <Text>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</Text>
        <Text as='h3' fontWeight='bold' textColor='white' mt={2}>User information</Text>
        <Text>If you would at any time like to review or change the information stored about you or delete it, contact us using the contact information provided.</Text>
        <Text>Upon your request to delete your information, we will suspend your account and delete information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</Text>

        <Text id="policyupdates" as='h2' fontWeight='bold' textColor='white' mt={4}>7. DO WE MAKE UPDATES TO THIS NOTICE?</Text>
        <Text>We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</Text>

        <Text id="contact" as='h2' fontWeight='bold' textColor='white' mt={4}>8. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Text>
        <Text>If you have questions or comments about this notice, you may email us at <u>mrmaderat1@gmail.com</u> OR contact us thru Discord platform by messaging <u>@fileeditor</u>.</Text>

        <Text id="request" as='h2' fontWeight='bold' textColor='white' mt={4}>9. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Text>
        <Text>You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please email us at <u>mrmaderat1@gmail.com</u>.</Text>
        
      </VStack>
    </>
  );
}

PrivacyPage.getLayout = (p) => <AppLayout>{p}</AppLayout>;
export default PrivacyPage;

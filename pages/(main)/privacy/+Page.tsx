import {Head} from "vike-react/Head";
import {chakra, VStack, List, Text, Link} from "@chakra-ui/react";

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
        <title>Privacy Policy | VOTL Bot</title>
      </Head>

      <Text as='h1' fontSize='3xl' fontWeight='semibold' mt={4}>Privacy Policy</Text>
      <Text fontSize='sm' color='white/30'>Last Update: 23/05/2026</Text>
      <VStack color='white/60' mt={5} gap={2} alignItems='start'>
        <Text>This Privacy Notice for FiLe group ('VOTL', 'we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your information when you use our services ('Services'), including when you:</Text>
        <List.Root pl={4}>
          <List.Item>Visit our website at <Link color='white' href='https://votl.fileeditor.dev/'>votl.fileeditor.dev</Link> or any website of ours that links to this Privacy Notice</List.Item>
          <List.Item>Use our Discord application ('Voice of the Lord', 'Bot', or 'VOTL Bot'), or any other Discord application of ours that links to this Privacy Notice</List.Item>
          <List.Item>Participate in the same Discord server in which the Bot is operated</List.Item>
        </List.Root>
        <Text><b>Questions or concerns?</b> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <u>votl@fileeditor.dev</u>.</Text>

        <TextHeading>SUMMARY OF KEY POINTS</TextHeading>
        <Text fontStyle='italic'>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point.</Text>
        <Text><b>What information do we process?</b> When you visit, use, or navigate our Services, we may process your information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <Link color='white' href={'#infocollect'}>what information we process</Link>.</Text>
        <Text><b>Do we process any sensitive personal information?</b> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, such as nicknames and any message sent by a user. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</Text>
        <Text><b>Do we receive any information from third parties?</b> We do not collect any information from third parties.</Text>
        <Text><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <Link color='white' href={"#infouse"}>how we process your information</Link>.</Text>
        <Text><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. Learn more about <Link color='white' href={"#whoshare"}>when and with whom we share your personal information</Link>.</Text>
        <Text><b>How do we keep your information safe?</b> We have adequate organisational and technical processes and procedures in place to protect your information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <Link color='white' href={'#security'}>how we keep your information safe</Link>.</Text>
        <Text><b>How to oup out of your data collection and processing?</b> Yes, you may request that we stop collecting data about your interactions with the Bot. Note that this will also restrict your ability to use the Bot. Learn more about <Link color='white' href={"#dnt"}>how to opt out of data collection</Link>.</Text>
        <Text><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your information. Learn more about <Link color='white' href={"#privacyrights"}>your privacy rights</Link>.</Text>
        <Text><b>How do you exercise your rights?</b> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</Text>

        <TextHeading id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</TextHeading>
        <Text as='h3' fontWeight='bold' color='white' mt={2}>Information you disclose to us</Text>
        <Text fontStyle='italic'><b>In Short:</b> We collect information that you provide to us.</Text>
        <Text>We collect information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</Text>
        <Text><b>Information Provided by You.</b> The information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The information we collect may include the following:</Text>
        <List.Root pl={4}>
          <List.Item>User IDs</List.Item>
          <List.Item>Server related IDs</List.Item>
          <List.Item>Webhook IDs and tokens</List.Item>
          <List.Item>Message IDs</List.Item>
          <List.Item>SteamIDs (Provided by UnionTeam's project ('UnionTeam', a Garry's mod server) via internal channel)</List.Item>
        </List.Root>
        <Text><b>Sensitive Information.</b> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</Text>
        <List.Root pl={4}>
          <List.Item>Discord Username and Display name</List.Item>
          <List.Item>Message content and attachments name</List.Item>
          <List.Item>Any user supplied content that can include text</List.Item>
        </List.Root>
        <Text>We do not knowingly provide Services to individuals under the age of 13. As Discord requires all users to be at least 13 years of age, we rely on Discord's own age verification for this purpose.</Text>

        <TextHeading id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</Text>
        <Text>We process your information for a variety of reasons, depending on how you interact with our Services, including:</Text>
        <List.Root pl={4}>
          <List.Item><b>To facilitate account creation and authentication and otherwise manage user accounts.</b> We may process your information so you can create and log in to your account, as well as keep your account in working order, including personal settings.</List.Item>
          <List.Item><b>To deliver and facilitate delivery of services to the user.</b> We may process your information to provide you with the requested service.</List.Item>
          <List.Item><b>To respond to user inquiries/offer support to users.</b> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</List.Item>
          <List.Item><b>To enable user-to-user communications.</b> We may process your information if you choose to use any of our offerings that allow for communication with another user.</List.Item>
          <List.Item><b>To protect our Services.</b> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</List.Item>
          <List.Item><b>To save or protect an individual's vital interest.</b> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</List.Item>
          <List.Item><b>To enforce our terms and restrictions.</b> We may process your information to identify users subject to access restrictions, including those who have submitted data deletion or Do Not Track requests, in order to maintain our internal blacklist and ensure compliance with user preferences.</List.Item>
        </List.Root>

        <TextHeading id="legalbases">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> We only process your information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</Text>
        <Text>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your information. As such, we may rely on the following legal bases to process your information:</Text>
        <List.Root pl={4}>
          <List.Item><b>Consent.</b> We may process your information if you have given us permission (i.e. consent) to use your information for a specific purpose. You can withdraw your consent at any time. Learn more <Link color='white' href={"#withdraw"}>about withdrawing your consent</Link>.</List.Item>
          <List.Item><b>Performance of a Contract.</b> We may process your information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</List.Item>
          <List.Item><b>Legitimate Interests.</b> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your information for some of the purposes described in order to diagnose problems and/or prevent fraudulent activities.</List.Item>
          <List.Item><b>Legal Obligations.</b> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</List.Item>
          <List.Item><b>Vital Interests.</b> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</List.Item>
        </List.Root>

        <TextHeading id="whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR INFORMATION?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> We may share information in specific situations described in this section and/or with the following third parties.</Text>
        <Text>We may need to share your information in the following situations:</Text>
        <List.Root pl={4}>
          <List.Item><b>Business Transfers.</b> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</List.Item>
          <List.Item><b>Other Users.</b> We may process your information when we believe it is necessary to fulfil our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</List.Item>
          <List.Item><b>Internal exchange.</b> If you are using Services through UnionTeam, your information - including SteamIDs - may be shared with and processed by UnionTeam's own services and infrastructure. We are not responsible for UnionTeam's independent data handling beyond what is covered in this notice. For questions specific to UnionTeam's deployment, contact us using using the details provided in this notice.</List.Item>
        </List.Root>

        <TextHeading id="inforetain">5. HOW LONG DO WE KEEP YOUR INFORMATION?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> We keep your information for as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law.</Text>
        <Text>We will only keep your information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. Specifically:</Text>
        <List.Root pl={4}>
          <List.Item><b>Message content</b> is retained in volatile memory for a maximum of 7 days, after which it is automatically deleted.</List.Item>
          <List.Item><b>Other identifiers</b> (User IDs, Server IDs, Channel IDs, etc.) are retained for as long as you have an active account or interaction with our Services.</List.Item>
        </List.Root>
        <Text>Upon account deletion or a deletion request, data is removed from active databases as described in section '<Link color='white' href={'#privacyrights'}>7. WHAT ARE YOUR PRIVACY RIGHTS?</Link>'.</Text>

        <TextHeading id="security">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> We aim to protect your information through a system of organisational and technical security measures.</Text>
        <Text>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your information, transmission of information to and from our Services is at your own risk. You should only access the Services within a secure environment.</Text>

        <TextHeading id="privacyrights">7. WHAT ARE YOUR PRIVACY RIGHTS?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Switzerland, you have rights that allow you greater access to and control over your information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</Text>
        <Text>In some regions (like the EEA, UK, and Switzerland), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your information, (ii) to request rectification or erasure; (iii) to restrict the processing of your information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. In certain circumstances, you may also have the right to object to the processing of your information. You can make such a request by contacting us by using the contact details provided in the section '<Link color='white' href={"#contact"}>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>' below.</Text>
        <Text>We will consider and act upon any request in accordance with applicable data protection laws.</Text>
        <Text>If you are located in the EEA or UK and you believe we are unlawfully processing your information, you also have the right to complain to your <Link color='white' href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">Member State data protection authority</Link> or <Link color='white' href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">UK data protection authority</Link>.</Text>
        <Text>If you are located in Switzerland, you may contact the <Link color='white' href="https://www.edoeb.admin.ch/en">Federal Data Protection and Information Commissioner</Link>.</Text>
        <Text><b>Withdrawing your consent:</b> If we are relying on your consent to process your information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section '<Link color="white" href={"#contact"}>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>' below.</Text>
        <Text>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, will it affect the processing of your information conducted in reliance on lawful processing grounds other than consent.</Text>
        <Text as='h3' fontWeight='bold' color='white' mt={2}>Account Information</Text>
        <Text>If you would at any time like to review or change the information in your account or terminate your account, you can contact us using the contact information provided.</Text>
        <Text>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. If you wish to also prevent future data collection, you may submit a Do Not Track request - see section '<Link color='white' href={'#dnt'}>8. HOW TO OPT OUT OF DATA COLLECTION?</Link>'.</Text>

        <TextHeading id="dnt">8. HOW TO OPT OUT OF DATA COLLECTION?</TextHeading>
        <Text>We support a "Do Not Track" (DNT) option for users who wish to limit the collection of data about their interactions in servers where the Bot is operated.</Text>
        <Text><b>How to request DNT:</b> You may contact us using the details in section '<Link color='white' href={'#request'}>9. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</Link>' to request that your interactions no longer be tracked.</Text>
        <Text><b>What DNT covers:</b> Upon a DNT request, we will stop collecting data about your interactions with the Bot, including any user-supplied content. You will also be placed on our internal blacklist, meaning you will no longer be able to interact with the Bot.</Text>
        <Text><b>What DNT does not cover:</b> DNT does not apply to data collected for Discord server moderation purposes. If you are a member of a server where the Bot performs moderation functions, the following minimal data may still be processed:</Text>
        <List.Root pl={4}>
          <List.Item>User ID</List.Item>
          <List.Item>Server join and leave events</List.Item>
          <List.Item>Moderation actions (timeout, ban, or kick events)</List.Item>
        </List.Root>
        <Text>Sensitive information such as message content and nicknames will never be collected or stored under moderation logging, regardless of DNT status.</Text>
        <Text><b>DNT and data deletion:</b> A DNT request will also result in the deletion of your previously collected data, subject to the exceptions noted in section '<Link color="white" href={"#privacyrights"}>7. WHAT ARE YOUR PRIVACY RIGHTS?</Link>'.</Text>

        <TextHeading id="policyupdates">9. DO WE MAKE UPDATES TO THIS NOTICE?</TextHeading>
        <Text fontStyle='italic'><b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.</Text>
        <Text>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated 'Last Update' date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</Text>

        <TextHeading id="contact">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</TextHeading>
        <Text>If you have questions or comments about this notice, you may email us at <u>votl@fileeditor.dev</u>.</Text>

        <TextHeading id="request">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</TextHeading>
        <Text>You have the right to request access to the information we collect from you, details about how we have processed it, correct inaccuracies, or delete your information. You may also have the right to withdraw your consent to our processing of your information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your information, please email us at <u>votl@fileeditor.dev</u>.</Text>
      </VStack>
    </>
  );
}
const CLAUSE_DB = {
  // ── ISO 27001 ──────────────────────────────────────────────────────
  'ISO 27001||A.5.1': {
    title: 'Policies for Information Security',
    text: '<p>A set of policies for information security shall be defined, approved by management, published and communicated to employees and relevant external parties. The policies shall be reviewed at planned intervals or if significant changes occur to ensure their continuing suitability, adequacy and effectiveness.</p>',
    guidance: '<p>Organisations should establish a top-level information security policy that is endorsed by top management and sets the organisation\'s approach to managing information security objectives. Supporting topic-specific policies should address areas such as access control, physical security, asset management, information transfer, and secure development.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 5.1'
  },
  'ISO 27001||A.6.1': {
    title: 'Internal Organisation — Security Roles and Responsibilities',
    text: '<p>All information security responsibilities shall be defined and allocated. Conflicting duties and areas of responsibility shall be segregated to reduce opportunities for unauthorised or unintentional modification or misuse of the organisation\'s assets.</p>',
    guidance: '<p>Assign clear ownership for each security domain. Establish a security steering committee or equivalent governance body. Ensure segregation of duties between those who authorise, execute, and review security-relevant activities. Document responsibility matrices (e.g. RACI) and review them annually.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 6.1'
  },
  'ISO 27001||A.7.2': {
    title: 'During Employment — Awareness, Education and Training',
    text: '<p>All employees of the organisation and, where relevant, contractors shall receive appropriate awareness education and training, and regular updates in organisational policies and procedures, as relevant for their job function.</p>',
    guidance: '<p>Implement a role-based security awareness programme that covers phishing recognition, data handling, incident reporting, and acceptable use. Conduct regular simulated attacks (e.g. phishing tests). Track completion rates and effectiveness metrics. Tailor training for privileged users, developers, and senior management.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 7.2'
  },
  'ISO 27001||A.8.2': {
    title: 'Information Classification',
    text: '<p>Information shall be classified in terms of legal requirements, value, criticality and sensitivity to unauthorised disclosure or modification. A suitable set of procedures for information labelling shall be developed and implemented in accordance with the classification scheme adopted.</p>',
    guidance: '<p>Define classification levels (e.g. Public, Internal, Confidential, Strictly Confidential). Establish labelling rules for digital and physical assets. Implement automated classification tooling where feasible. Ensure handling procedures cover storage, transmission, retention and destruction for each level.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 8.2'
  },
  'ISO 27001||A.9.2': {
    title: 'User Access Management',
    text: '<p>A formal user registration and de-registration process shall be implemented to enable assignment of access rights. A formal user access provisioning process shall be implemented to assign or revoke access rights for all user types to all systems and services. The allocation and use of privileged access rights shall be restricted and controlled.</p>',
    guidance: '<p>Implement a centralised identity management system. Enforce the principle of least privilege. Conduct periodic access reviews (at minimum quarterly for privileged accounts, semi-annually for standard access). Automate joiner/mover/leaver processes to ensure timely de-provisioning. Maintain audit trails of all access changes.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 9.2'
  },
  'ISO 27001||A.9.4': {
    title: 'System and Application Access Control',
    text: '<p>Access to systems and applications shall be controlled by a secure log-on procedure. Password management systems shall be interactive and shall ensure quality passwords. The use of utility programmes that might be capable of overriding system and application controls shall be restricted and tightly controlled.</p>',
    guidance: '<p>Enforce multi-factor authentication (MFA) for all privileged and remote access. Implement adaptive authentication that factors in user behaviour, location and device posture. Use password managers and enforce minimum complexity standards. Restrict access to system utilities and administrative tools to authorised personnel only.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 9.4'
  },
  'ISO 27001||A.10.1': {
    title: 'Cryptographic Controls',
    text: '<p>A policy on the use of cryptographic controls for protection of information shall be developed and implemented. A policy on the use, protection and lifetime of cryptographic keys shall be developed and implemented through their whole lifecycle.</p>',
    guidance: '<p>Define approved cryptographic algorithms and key lengths (e.g. AES-256, RSA-2048+). Implement TLS 1.2+ for all data in transit. Encrypt sensitive data at rest in databases and storage systems. Establish key management procedures covering generation, distribution, storage, rotation, revocation and destruction. Consider HSM usage for critical keys.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 10.1'
  },
  'ISO 27001||A.12.1': {
    title: 'Operational Procedures and Responsibilities',
    text: '<p>Operating procedures shall be documented and made available to all users who need them. Changes to the organisation, business processes, information processing facilities and systems that affect information security shall be controlled.</p>',
    guidance: '<p>Maintain documented standard operating procedures for all critical systems. Implement formal change management covering impact assessment, approval, testing, rollback plans and post-implementation review. Separate development, testing and operational environments. Monitor capacity and plan for future demands.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 12.1'
  },
  'ISO 27001||A.12.6': {
    title: 'Technical Vulnerability Management',
    text: '<p>Information about technical vulnerabilities of information systems being used shall be obtained in a timely fashion, the organisation\'s exposure to such vulnerabilities evaluated and appropriate measures taken to address the associated risk.</p>',
    guidance: '<p>Perform regular vulnerability scanning (at minimum monthly for external-facing assets, quarterly for internal). Establish SLAs for remediation based on severity: Critical within 72 hours, High within 2 weeks, Medium within 30 days. Integrate vulnerability data with asset inventory and risk register. Subscribe to vendor advisories and threat intelligence feeds.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 12.6'
  },
  'ISO 27001||A.13.1': {
    title: 'Network Security Management',
    text: '<p>Networks shall be managed and controlled to protect information in systems and applications. Security mechanisms, service levels and management requirements of all network services shall be identified and included in network services agreements.</p>',
    guidance: '<p>Implement network segmentation using VLANs, firewalls and micro-segmentation to isolate critical assets. Apply defence-in-depth principles. Conduct regular firewall rule reviews and remove unused rules. Monitor network traffic for anomalies. Implement intrusion detection/prevention systems (IDS/IPS) at network boundaries and critical segments.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 13.1'
  },
  'ISO 27001||A.15.1': {
    title: 'Information Security in Supplier Relationships',
    text: '<p>Information security requirements for mitigating the risks associated with supplier\'s access to the organisation\'s assets shall be agreed with the supplier and documented. All relevant information security requirements shall be established and agreed with each supplier.</p>',
    guidance: '<p>Conduct due diligence assessments prior to onboarding suppliers. Include security requirements in RFPs and contracts. Define right-to-audit clauses. Require evidence of security certifications (ISO 27001, SOC 2) where appropriate. Maintain a register of all suppliers with access to organisational data or systems. Classify suppliers by criticality tier.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 15.1'
  },
  'ISO 27001||A.15.2': {
    title: 'Supplier Service Delivery Management',
    text: '<p>Organisations shall regularly monitor, review and audit supplier service delivery. Changes to the provision of services by suppliers shall be managed, taking account of the criticality of business information, systems and processes involved.</p>',
    guidance: '<p>Establish KPIs and SLAs for supplier security performance. Conduct periodic security reviews (annually at minimum for critical suppliers). Monitor supplier security posture using continuous monitoring tools and threat intelligence. Define escalation procedures and exit strategies. Review sub-contractor arrangements and fourth-party dependencies.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 15.2'
  },
  'ISO 27001||A.16.1': {
    title: 'Management of Information Security Incidents',
    text: '<p>Management responsibilities and procedures shall be established to ensure a quick, effective and orderly response to information security incidents. Information security events shall be reported through appropriate management channels as quickly as possible.</p>',
    guidance: '<p>Develop and maintain an incident response plan with clear roles, escalation matrices and communication templates. Establish a Security Operations Centre (SOC) or equivalent monitoring capability. Define incident severity classifications and response SLAs. Conduct regular tabletop exercises. Implement post-incident review processes to capture lessons learned and improve controls.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 16.1'
  },
  'ISO 27001||A.17.1': {
    title: 'Information Security Continuity',
    text: '<p>The organisation shall determine its requirements for information security and the continuity of information security management in adverse situations, e.g. during a crisis or disaster.</p>',
    guidance: '<p>Integrate information security into the Business Continuity Management (BCM) framework. Define Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) for critical systems. Maintain documented disaster recovery procedures. Test continuity plans at least annually through simulation exercises.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 17.1'
  },
  'ISO 27001||A.17.2': {
    title: 'Redundancies',
    text: '<p>Information processing facilities shall be implemented with sufficient redundancy to meet availability requirements. Redundancy of key components and systems should be planned and tested.</p>',
    guidance: '<p>Design infrastructure with N+1 or greater redundancy for critical components. Implement geographic distribution of systems and data. Conduct regular failover testing to verify redundancy mechanisms. Document single points of failure and mitigation plans. Consider active-active architectures for business-critical services.</p>',
    source: 'ISO/IEC 27001:2022, Annex A Control 17.2'
  },

  // ── DORA Chapter II: ICT Risk Management ─────────────────────────
  'DORA||Art. 5(1)': {
    title: 'Governance — Internal Governance and ICT Risk',
    text: '<p>Financial entities must establish an internal governance framework ensuring effective management of ICT risk to achieve a high level of digital operational resilience.</p>',
    guidance: '<p>Ensure a formally documented governance structure assigning ICT risk management responsibilities. Include digital operational resilience as a standing board agenda item. Align governance with the three-lines-of-defence model.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(1)'
  },
  'DORA||Art. 5(2)': {
    title: 'Governance — Management Body Responsibilities',
    text: '<p>The management body shall define, approve, oversee and be accountable for implementing all ICT risk management arrangements, including policies on data standards, risk tolerance, resilience strategy, business continuity, audit plans, budgets, and third-party arrangements.</p>',
    guidance: '<p>Document board-level approval for each required area (a–i). Establish a formal approval calendar. Create reporting dashboards for ICT risk KPIs. Ensure minutes record all ICT risk decisions.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(2)'
  },
  'DORA||Art. 5(2)(d)': {
    title: 'Governance — Digital Operational Resilience Strategy',
    text: '<p>The management body shall set and approve the digital operational resilience strategy, including determining the appropriate ICT risk tolerance level of the financial entity.</p>',
    guidance: '<p>Develop a multi-year resilience strategy with measurable objectives. Define risk appetite statements for ICT and cyber risk. Review and update the strategy at least annually or after significant incidents.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(2)(d)'
  },
  'DORA||Art. 5(2)(g)': {
    title: 'Governance — ICT Budget Allocation',
    text: '<p>The management body shall allocate and periodically review the appropriate budget to fulfil the financial entity\'s digital operational resilience needs in respect of all types of resources, including relevant ICT security awareness programmes and training.</p>',
    guidance: '<p>Establish a dedicated ICT resilience budget line with annual review. Benchmark spending against industry peers. Ensure budget covers security tools, training, testing and incident response capabilities.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(2)(g)'
  },
  'DORA||Art. 5(2)(h)': {
    title: 'Governance — Third-Party Arrangement Policies',
    text: '<p>The management body shall approve and periodically review the entity\'s policy on arrangements regarding the use of ICT services provided by ICT third-party service providers.</p>',
    guidance: '<p>Maintain a board-approved third-party ICT policy. Review at least annually. Include criteria for provider selection, risk assessment, and ongoing monitoring requirements.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(2)(h)'
  },
  'DORA||Art. 5(2)(i)': {
    title: 'Governance — Reporting Channels',
    text: '<p>The management body shall establish reporting channels for third-party arrangements, material changes, impact assessments on critical functions, and major incidents.</p>',
    guidance: '<p>Define formal reporting lines from ICT risk function to board. Implement automated dashboards for third-party risk. Establish escalation triggers for material changes and incidents.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(2)(i)'
  },
  'DORA||Art. 5(3)': {
    title: 'Governance — ICT Third-Party Monitoring Role',
    text: '<p>Financial entities shall establish a dedicated role or designate senior management to monitor ICT third-party service provider arrangements and risk exposure.</p>',
    guidance: '<p>Assign a named senior individual responsible for ICT third-party oversight. Define clear mandate, authority and reporting requirements. Ensure access to all third-party risk information.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(3)'
  },
  'DORA||Art. 5(4)': {
    title: 'Governance — Management Body ICT Training',
    text: '<p>Management body members must maintain sufficient knowledge and skills to understand and assess ICT risk through regular, commensurate training.</p>',
    guidance: '<p>Establish a tailored training programme for board members covering ICT risk fundamentals, emerging threats, and regulatory requirements. Deliver training at least annually. Track completion and competency.</p>',
    source: 'DORA (EU) 2022/2554, Article 5(4)'
  },
  'DORA||Art. 6(1)': {
    title: 'ICT Risk Management Framework — Establishment',
    text: '<p>Financial entities shall have a sound, comprehensive and well-documented ICT risk management framework as part of their overall risk management system, enabling them to address ICT risk quickly, efficiently and comprehensively.</p>',
    guidance: '<p>Integrate ICT risk management into the enterprise risk framework. Define risk appetite statements specific to ICT. Implement a methodology covering threat identification, vulnerability assessment, and impact analysis. Maintain and regularly update the ICT risk register.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(1)'
  },
  'DORA||Art. 6(2)': {
    title: 'ICT Risk Management Framework — Asset Protection',
    text: '<p>The framework must include strategies, policies, procedures and tools to protect information and ICT assets, including software, hardware, servers, physical components and sensitive areas.</p>',
    guidance: '<p>Maintain a comprehensive ICT asset inventory. Classify assets by criticality. Implement controls proportionate to asset classification. Include physical security measures for data centres and sensitive areas.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(2)'
  },
  'DORA||Art. 6(4)': {
    title: 'ICT Risk Management Framework — Independent Control Function',
    text: '<p>Non-microenterprises must assign ICT risk management responsibility to an independent control function following a three-lines-of-defence model to avoid conflicts of interest.</p>',
    guidance: '<p>Establish the ICT risk management function independently from ICT operations. Ensure no conflicts of interest. Follow the three-lines-of-defence model with clear separation between operations, risk management, and audit.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(4)'
  },
  'DORA||Art. 6(5)': {
    title: 'ICT Risk Management Framework — Annual Review',
    text: '<p>The framework requires annual documentation and review, especially following major incidents. Reports must be submitted to competent authorities upon request.</p>',
    guidance: '<p>Schedule annual framework reviews. Trigger ad-hoc reviews after major incidents. Document all changes and maintain version history. Prepare reports for regulatory submission.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(5)'
  },
  'DORA||Art. 6(6)': {
    title: 'ICT Risk Management Framework — Internal Audits',
    text: '<p>Non-microenterprises must undergo regular internal ICT audits by knowledgeable, independent auditors with audit frequency matching the entity\'s ICT risk profile.</p>',
    guidance: '<p>Develop a risk-based ICT audit plan. Ensure auditors have relevant ICT expertise and certifications. Align audit frequency with the entity\'s risk profile. Report findings to management body.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(6)'
  },
  'DORA||Art. 6(7)': {
    title: 'ICT Risk Management Framework — Audit Follow-Up',
    text: '<p>Entities shall establish formal follow-up processes for timely verification and remediation of critical audit findings.</p>',
    guidance: '<p>Implement a findings tracking system with defined remediation timelines. Assign ownership for each finding. Conduct verification testing after remediation. Escalate overdue findings to management.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(7)'
  },
  'DORA||Art. 6(8)': {
    title: 'ICT Risk Management Framework — Resilience Strategy Elements',
    text: '<p>The framework must include a digital operational resilience strategy addressing eight specific elements: business alignment, risk tolerance, security objectives, ICT architecture, incident detection, current resilience status, testing implementation, and incident communication.</p>',
    guidance: '<p>Map each of the eight required strategy elements to documented policies and procedures. Ensure the strategy is coherent and comprehensive. Review alignment at least annually.</p>',
    source: 'DORA (EU) 2022/2554, Article 6(8)'
  },
  'DORA||Art. 7(1)': {
    title: 'ICT Systems — Proportionality',
    text: '<p>Financial entities must use ICT systems, protocols and tools appropriate to the magnitude of operations supporting their activities.</p>',
    guidance: '<p>Assess system adequacy against business requirements. Ensure systems scale with business growth. Document the rationale for technology choices against operational needs.</p>',
    source: 'DORA (EU) 2022/2554, Article 7(1)'
  },
  'DORA||Art. 7(2)': {
    title: 'ICT Systems — Reliability',
    text: '<p>The ICT infrastructure must demonstrate dependable performance and consistent functionality.</p>',
    guidance: '<p>Implement SLA monitoring and uptime tracking. Deploy infrastructure monitoring tools. Establish performance baselines and alerting thresholds. Conduct regular reliability testing.</p>',
    source: 'DORA (EU) 2022/2554, Article 7(2)'
  },
  'DORA||Art. 7(3)': {
    title: 'ICT Systems — Processing Capacity',
    text: '<p>Systems must have sufficient capacity to accurately process data and provide timely services, including handling transaction volume spikes and technological upgrades.</p>',
    guidance: '<p>Perform capacity planning exercises regularly. Implement auto-scaling where appropriate. Conduct load testing to validate peak capacity handling. Plan for technology refreshes.</p>',
    source: 'DORA (EU) 2022/2554, Article 7(3)'
  },
  'DORA||Art. 7(4)': {
    title: 'ICT Systems — Technological Resilience',
    text: '<p>Infrastructure must possess technologically resilient characteristics to manage elevated processing demands during market stress or other adverse operational circumstances.</p>',
    guidance: '<p>Design systems for degraded-mode operation. Implement circuit breakers and rate limiting. Test system behaviour under stress conditions. Maintain spare capacity for adverse scenarios.</p>',
    source: 'DORA (EU) 2022/2554, Article 7(4)'
  },
  'DORA||Art. 8(1)': {
    title: 'Identification — Business Functions and Assets',
    text: '<p>Financial entities must identify, classify and document all ICT-supported business functions, roles, responsibilities, information assets and ICT assets, reviewing classification at least yearly.</p>',
    guidance: '<p>Maintain a comprehensive register of all ICT-dependent business functions. Map each function to supporting ICT assets. Classify assets by criticality. Conduct annual reviews and update documentation.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(1)'
  },
  'DORA||Art. 8(2)': {
    title: 'Identification — Risk Sources',
    text: '<p>Entities must continuously identify all ICT risk sources, including exposure to other financial entities, and assess relevant cyber threats and vulnerabilities. Risk scenarios require annual review.</p>',
    guidance: '<p>Implement continuous threat and vulnerability monitoring. Subscribe to threat intelligence feeds relevant to the financial sector. Maintain a risk scenario library with annual review cycles.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(2)'
  },
  'DORA||Art. 8(3)': {
    title: 'Identification — Change-Triggered Risk Assessment',
    text: '<p>Entities must perform risk assessments whenever major changes occur in their network infrastructure, processes or procedures affecting ICT business functions and assets.</p>',
    guidance: '<p>Integrate risk assessment triggers into change management processes. Define thresholds for what constitutes a "major change." Document risk assessment results as part of change approval.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(3)'
  },
  'DORA||Art. 8(4)': {
    title: 'Identification — Asset Mapping',
    text: '<p>Entities must identify all information and ICT assets including those at remote sites, map critical ones, and document their configurations, links and interdependencies.</p>',
    guidance: '<p>Deploy automated asset discovery tools. Maintain configuration management databases (CMDB). Map dependencies between assets. Include remote and cloud-hosted assets in the inventory.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(4)'
  },
  'DORA||Art. 8(5)': {
    title: 'Identification — Third-Party Dependencies',
    text: '<p>Entities must identify and document all processes dependent on ICT third-party service providers and map interconnections with providers offering critical or important functions.</p>',
    guidance: '<p>Map all business processes to their third-party ICT dependencies. Identify single points of failure. Document data flows between the entity and providers. Assess criticality of each dependency.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(5)'
  },
  'DORA||Art. 8(6)': {
    title: 'Identification — Inventory Maintenance',
    text: '<p>Entities must maintain and periodically update inventories of business functions, ICT assets and third-party dependencies, with updates triggered by major changes.</p>',
    guidance: '<p>Establish a regular update cycle for all inventories. Automate inventory updates where possible. Trigger reviews upon major changes. Assign inventory ownership to responsible teams.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(6)'
  },
  'DORA||Art. 8(7)': {
    title: 'Identification — Legacy System Risk Assessment',
    text: '<p>Entities must conduct specific risk assessments on legacy ICT systems at least yearly, and before/after connecting new technologies or systems.</p>',
    guidance: '<p>Maintain a legacy system register. Conduct annual risk assessments for each legacy system. Evaluate migration or decommissioning options. Implement compensating controls where modernisation is not feasible.</p>',
    source: 'DORA (EU) 2022/2554, Article 8(7)'
  },
  'DORA||Art. 9(1)': {
    title: 'Protection and Prevention — Monitoring',
    text: '<p>Financial entities shall continuously monitor and control the security and functioning of ICT systems and tools and shall minimise the impact of ICT risk through the deployment of appropriate ICT security tools, policies and procedures.</p>',
    guidance: '<p>Deploy continuous security monitoring tools (SIEM, EDR, NDR). Establish security operations procedures. Implement automated response capabilities. Define KPIs for monitoring effectiveness.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(1)'
  },
  'DORA||Art. 9(2)': {
    title: 'Protection and Prevention — Data Protection',
    text: '<p>Financial entities shall design and implement ICT security policies that aim to ensure resilience, continuity and availability of ICT systems, maintaining high standards of availability, authenticity, integrity and confidentiality of data.</p>',
    guidance: '<p>Implement data classification schemes. Deploy encryption for data at rest and in transit. Establish data loss prevention (DLP) capabilities. Implement key management procedures with secure key storage.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(2)'
  },
  'DORA||Art. 9(3)': {
    title: 'Protection and Prevention — Authentication and Encryption',
    text: '<p>Financial entities shall implement strong authentication mechanisms based on relevant standards and protection measures for cryptographic keys.</p>',
    guidance: '<p>Deploy multi-factor authentication for all critical systems. Implement phishing-resistant MFA (FIDO2, hardware tokens) for privileged accounts. Maintain cryptographic key management covering the full key lifecycle.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(3)'
  },
  'DORA||Art. 9(4)': {
    title: 'Protection and Prevention — Access Control and Policies',
    text: '<p>Financial entities shall implement policies limiting physical and logical access to ICT systems and establish documented information security policies, network infrastructure management, access control policies, authentication mechanisms, change management and patching policies.</p>',
    guidance: '<p>Implement least privilege across all systems. Establish formal access provisioning/de-provisioning. Deploy PAM solutions. Maintain secure configuration baselines. Document ICT change management with management approval. Establish comprehensive patch and update policies.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)'
  },
  'DORA||Art. 9(4)(a)': {
    title: 'Protection — Information Security Policies',
    text: '<p>Entities shall develop and maintain documented information security policies.</p>',
    guidance: '<p>Maintain a comprehensive information security policy set covering all required domains. Review and update policies annually. Ensure policies are communicated to all relevant staff.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(a)'
  },
  'DORA||Art. 9(4)(b)': {
    title: 'Protection — Network Security Management',
    text: '<p>Entities shall establish network infrastructure management with mechanisms to isolate during cyber-attacks and allow instantaneous severance/segmentation.</p>',
    guidance: '<p>Implement network segmentation with micro-segmentation for critical assets. Deploy network isolation capabilities (kill switches). Design networks to prevent lateral movement. Test isolation mechanisms regularly.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(b)'
  },
  'DORA||Art. 9(4)(c)': {
    title: 'Protection — Logical and Physical Access',
    text: '<p>Entities shall implement access control policies limiting logical and physical access to what is required for legitimate functions.</p>',
    guidance: '<p>Enforce principle of least privilege. Implement role-based access control. Conduct regular access reviews. Secure physical access to data centres and sensitive areas with appropriate controls.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(c)'
  },
  'DORA||Art. 9(4)(d)': {
    title: 'Protection — Strong Authentication and Encryption',
    text: '<p>Entities shall deploy strong authentication mechanisms and encryption measures based on risk assessments.</p>',
    guidance: '<p>Deploy MFA for all system access. Use risk-based authentication. Implement TLS 1.3 or equivalent for data in transit. Use AES-256 or equivalent for data at rest. Manage cryptographic keys according to policy.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(d)'
  },
  'DORA||Art. 9(4)(e)': {
    title: 'Protection — ICT Change Management',
    text: '<p>Entities shall maintain documented ICT change management procedures with appropriate management approval and specific protocols.</p>',
    guidance: '<p>Implement a formal change management process with CAB approval. Document all changes with risk assessment. Maintain rollback procedures. Test changes in non-production environments first.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(e)'
  },
  'DORA||Art. 9(4)(f)': {
    title: 'Protection — Patching and Updates',
    text: '<p>Entities shall establish comprehensive patching and update policies.</p>',
    guidance: '<p>Implement risk-based patch management. Define SLAs for critical, high, medium and low severity patches. Automate patching where possible. Track patch compliance rates. Establish emergency patching procedures.</p>',
    source: 'DORA (EU) 2022/2554, Article 9(4)(f)'
  },
  'DORA||Art. 10(1)': {
    title: 'Detection — Mechanisms',
    text: '<p>Financial entities shall have mechanisms to promptly detect anomalous activities, ICT network performance issues and ICT-related incidents, and identify potential material single points of failure.</p>',
    guidance: '<p>Deploy SIEM with correlation rules. Implement anomaly detection systems. Deploy network monitoring and traffic analysis. Regularly test detection mechanisms through exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 10(1)'
  },
  'DORA||Art. 10(2)': {
    title: 'Detection — Layered Controls',
    text: '<p>Detection systems should feature layered controls, establish alert thresholds to activate incident response, and include automated notifications for incident handlers.</p>',
    guidance: '<p>Implement defence-in-depth detection. Define and tune alert thresholds. Automate incident notification and initial triage. Integrate detection with SOAR platforms for automated response.</p>',
    source: 'DORA (EU) 2022/2554, Article 10(2)'
  },
  'DORA||Art. 10(3)': {
    title: 'Detection — Monitoring Resources',
    text: '<p>Organizations must allocate adequate resources and capabilities to supervise user behaviour, ICT anomalies and incidents, with particular attention to cyber-attacks.</p>',
    guidance: '<p>Staff a security operations capability (internal SOC or managed service). Deploy UEBA tools. Monitor privileged user activity. Ensure 24/7 coverage for critical systems.</p>',
    source: 'DORA (EU) 2022/2554, Article 10(3)'
  },
  'DORA||Art. 11(1)': {
    title: 'Response and Recovery — Business Continuity Policy',
    text: '<p>Financial entities shall put in place a comprehensive ICT business continuity policy forming an integral part of the overall business continuity policy.</p>',
    guidance: '<p>Develop an ICT-specific BCP covering all critical functions. Align with overall business continuity strategy. Ensure the policy addresses all ICT dependencies and failure scenarios.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(1)'
  },
  'DORA||Art. 11(2)': {
    title: 'Response and Recovery — Documented Arrangements',
    text: '<p>The policy requires documented arrangements to maintain critical functions, respond to incidents, activate containment measures, assess impacts, and coordinate communications.</p>',
    guidance: '<p>Document detailed response procedures for each critical function. Define containment strategies. Establish impact assessment templates. Create communication trees for all stakeholders.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(2)'
  },
  'DORA||Art. 11(3)': {
    title: 'Response and Recovery — Audit Reviews',
    text: '<p>Response and recovery plans must be subject to independent internal audit reviews for non-microenterprises.</p>',
    guidance: '<p>Include BCP/DRP in the internal audit plan. Ensure auditors assess plan completeness, testing adequacy, and alignment with requirements. Track and remediate audit findings.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(3)'
  },
  'DORA||Art. 11(4)': {
    title: 'Response and Recovery — Periodic Testing',
    text: '<p>Entities must maintain and periodically test business continuity plans, particularly regarding critical functions handled by ICT third-party providers.</p>',
    guidance: '<p>Test BCP at least annually. Include third-party provider scenarios. Conduct tabletop exercises and full failover tests. Document results and track improvements.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(4)'
  },
  'DORA||Art. 11(5)': {
    title: 'Response and Recovery — Business Impact Analysis',
    text: '<p>A business impact analysis must evaluate exposure to severe disruptions using quantitative and qualitative criteria, considering function criticality, dependencies, and ICT asset redundancy.</p>',
    guidance: '<p>Conduct BIA for all critical business functions. Quantify financial and operational impact of disruptions. Identify dependencies and single points of failure. Use results to define RTOs and RPOs.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(5)'
  },
  'DORA||Art. 11(6)': {
    title: 'Response and Recovery — Annual Testing Requirements',
    text: '<p>Financial entities shall test ICT business continuity plans at least yearly including cyber-attack scenarios and infrastructure switchover tests.</p>',
    guidance: '<p>Conduct annual DR exercises including full failover tests. Simulate ransomware, data centre loss and cloud outage scenarios. Test backup restoration and verify data integrity. Track remediation actions.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(6)'
  },
  'DORA||Art. 11(7)': {
    title: 'Response and Recovery — Crisis Management Function',
    text: '<p>Non-microenterprises require a crisis management function with clear procedures to manage internal and external crisis communications.</p>',
    guidance: '<p>Establish a crisis management team with defined roles. Develop internal and external communication templates. Conduct crisis simulation exercises. Maintain escalation procedures.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(7)'
  },
  'DORA||Art. 11(8)': {
    title: 'Response and Recovery — Disruption Records',
    text: '<p>Organizations must maintain accessible records of activities during disruption events.</p>',
    guidance: '<p>Implement incident logging during disruptions. Maintain timeline records of all actions taken. Ensure records are accessible for post-incident review and regulatory reporting.</p>',
    source: 'DORA (EU) 2022/2554, Article 11(8)'
  },
  'DORA||Art. 12(1)': {
    title: 'Backup — Policies and Frequency',
    text: '<p>Financial entities must develop and document backup policies specifying data scope and minimum backup frequency based on criticality and confidentiality levels.</p>',
    guidance: '<p>Define backup scope covering all critical data and systems. Set backup frequency aligned with RPOs. Document retention policies. Classify data to determine appropriate backup strategies.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(1)'
  },
  'DORA||Art. 12(2)': {
    title: 'Backup — Systems and Testing',
    text: '<p>Entities must establish backup systems with documented activation procedures and periodically test backup, restoration and recovery procedures.</p>',
    guidance: '<p>Implement automated backup systems. Document activation and restoration procedures. Test backups regularly including full restoration drills. Verify data integrity after restoration.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(2)'
  },
  'DORA||Art. 12(3)': {
    title: 'Backup — Segregation and Protection',
    text: '<p>Backup restoration systems must be physically and logically segregated from source systems, protected from unauthorized access, and enable timely service restoration.</p>',
    guidance: '<p>Implement air-gapped or immutable backup storage. Ensure logical separation from production environments. Protect backup systems with appropriate access controls and encryption.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(3)'
  },
  'DORA||Art. 12(4)': {
    title: 'Backup — Redundant Capacities',
    text: '<p>Non-microenterprise entities must maintain redundant ICT capacities with adequate resources and functions.</p>',
    guidance: '<p>Design infrastructure with N+1 or greater redundancy. Implement geographic distribution. Conduct regular failover testing. Document single points of failure and mitigation plans.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(4)'
  },
  'DORA||Art. 12(6)': {
    title: 'Backup — RTO and RPO Objectives',
    text: '<p>Recovery time and recovery point objectives must consider function criticality, potential market impact, and ensure service levels in extreme scenarios.</p>',
    guidance: '<p>Define RTOs and RPOs for each critical function based on BIA results. Ensure DR architecture supports defined objectives. Validate through regular testing. Review after significant changes.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(6)'
  },
  'DORA||Art. 12(7)': {
    title: 'Backup — Post-Incident Data Integrity',
    text: '<p>Following ICT incidents, entities must perform checks and reconciliations to maintain data integrity, including verification of reconstructed data.</p>',
    guidance: '<p>Implement data integrity verification procedures. Conduct reconciliation checks after restoration. Verify completeness and accuracy of recovered data. Document verification results.</p>',
    source: 'DORA (EU) 2022/2554, Article 12(7)'
  },
  'DORA||Art. 13(1)': {
    title: 'Learning and Evolving — Threat Intelligence',
    text: '<p>Financial entities shall have capabilities to gather and analyse information on vulnerabilities, cyber threats and ICT-related incidents, assessing their impact on digital operational resilience.</p>',
    guidance: '<p>Subscribe to relevant CTI feeds. Participate in financial sector ISACs. Implement vulnerability scanning. Analyse threat landscape regularly and update risk assessments accordingly.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(1)'
  },
  'DORA||Art. 13(2)': {
    title: 'Learning and Evolving — Post-Incident Reviews',
    text: '<p>Entities must conduct post-incident reviews following major ICT incidents, identifying disruption causes and needed improvements, evaluating response promptness, forensic analysis quality, escalation effectiveness, and communication quality.</p>',
    guidance: '<p>Conduct PIRs within 2 weeks of incident closure. Use root cause analysis methodologies. Document findings in standardised format. Track remediation actions to completion.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(2)'
  },
  'DORA||Art. 13(3)': {
    title: 'Learning and Evolving — Continuous Improvement',
    text: '<p>Lessons learned from testing and real-life incidents including cyber-attacks must be continuously incorporated into ICT risk assessment and the risk management framework.</p>',
    guidance: '<p>Establish a formal lessons-learned process. Update risk assessments with incident findings. Modify controls based on testing results. Track improvements to closure.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(3)'
  },
  'DORA||Art. 13(4)': {
    title: 'Learning and Evolving — Strategy Monitoring',
    text: '<p>Entities must monitor digital operational resilience strategy effectiveness, mapping ICT risk evolution and analysing incident frequency, types and patterns.</p>',
    guidance: '<p>Define metrics for resilience strategy effectiveness. Track incident trends over time. Map risk evolution against strategy objectives. Report to management body regularly.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(4)'
  },
  'DORA||Art. 13(5)': {
    title: 'Learning and Evolving — Annual ICT Risk Reporting',
    text: '<p>Senior ICT staff must report yearly to the management body on findings and recommendations.</p>',
    guidance: '<p>Prepare annual ICT risk report for the board. Include findings from audits, tests and incidents. Provide recommendations with prioritisation. Track management body decisions and actions.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(5)'
  },
  'DORA||Art. 13(6)': {
    title: 'Learning and Evolving — Security Training',
    text: '<p>Entities must develop mandatory ICT security awareness and digital operational resilience training for all employees and senior management, tailored to role complexity.</p>',
    guidance: '<p>Develop role-based security awareness training. Include phishing simulations. Deliver training for senior management covering strategic ICT risk topics. Track completion rates and effectiveness.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(6)'
  },
  'DORA||Art. 13(7)': {
    title: 'Learning and Evolving — Technology Monitoring',
    text: '<p>Non-microenterprises must continuously monitor technological developments and their ICT security impacts, staying current with risk management processes to combat evolving cyber-attacks.</p>',
    guidance: '<p>Monitor emerging technology risks and trends. Subscribe to security advisories. Update risk management processes for new attack vectors. Conduct horizon scanning exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 13(7)'
  },
  'DORA||Art. 14(1)': {
    title: 'Communication — Crisis Communication Plans',
    text: '<p>Financial entities must establish crisis communication plans enabling responsible disclosure of major incidents and vulnerabilities to clients, counterparts and the public.</p>',
    guidance: '<p>Develop crisis communication templates for different incident types. Define approval workflows for external communications. Establish media handling procedures. Test communication plans through exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 14(1)'
  },
  'DORA||Art. 14(2)': {
    title: 'Communication — Stakeholder Policies',
    text: '<p>Entities shall implement communication policies for both internal staff and external stakeholders, differentiating between ICT risk management staff and general notification recipients.</p>',
    guidance: '<p>Create differentiated communication channels. Define what information is shared with which audience. Implement secure communication channels for incident response teams.</p>',
    source: 'DORA (EU) 2022/2554, Article 14(2)'
  },
  'DORA||Art. 14(3)': {
    title: 'Communication — Designated Spokesperson',
    text: '<p>At least one designated person must be responsible for implementing the ICT incident communication strategy and serving as the public and media contact point.</p>',
    guidance: '<p>Designate a named communications lead for ICT incidents. Provide media training. Ensure backup designates are identified. Include contact details in incident response plans.</p>',
    source: 'DORA (EU) 2022/2554, Article 14(3)'
  },
  // ── DORA Chapter III: ICT-Related Incident Management ───────────
  'DORA||Art. 17(1)': {
    title: 'Incident Management — Process Establishment',
    text: '<p>Financial entities shall define, establish and implement an ICT-related incident management process to detect, manage and notify ICT-related incidents.</p>',
    guidance: '<p>Implement a formalised incident management process with clear severity classifications. Define escalation matrices and notification timelines. Establish incident response playbooks for common scenarios.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(1)'
  },
  'DORA||Art. 17(2)': {
    title: 'Incident Management — Documentation',
    text: '<p>Entities shall record all ICT-related incidents and significant cyber threats, implementing monitoring procedures to identify root causes and prevent recurrence.</p>',
    guidance: '<p>Maintain an incident register with all details. Implement root cause analysis for significant incidents. Track remediation actions. Use incident data for trend analysis and prevention.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(2)'
  },
  'DORA||Art. 17(3)(a)': {
    title: 'Incident Management — Early Warning Systems',
    text: '<p>The incident management process must include implementation of early warning systems to detect emerging threats.</p>',
    guidance: '<p>Deploy threat intelligence-driven early warning capabilities. Integrate CTI feeds into monitoring systems. Establish threat hunting procedures. Share early warnings within information sharing networks.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(a)'
  },
  'DORA||Art. 17(3)(b)': {
    title: 'Incident Management — Categorization',
    text: '<p>The process must include procedures for identifying, monitoring and categorizing incidents based on severity and impact to critical services.</p>',
    guidance: '<p>Define severity levels aligned with DORA classification criteria. Implement automated triage where possible. Categorise by impact to critical functions. Prioritise response based on severity.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(b)'
  },
  'DORA||Art. 17(3)(c)': {
    title: 'Incident Management — Roles and Responsibilities',
    text: '<p>Clear assignment of roles and responsibilities for various incident types and scenarios.</p>',
    guidance: '<p>Define RACI matrices for incident response. Assign incident commanders and response team roles. Document responsibilities for each incident type. Ensure coverage for all shifts and scenarios.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(c)'
  },
  'DORA||Art. 17(3)(d)': {
    title: 'Incident Management — Communication and Escalation',
    text: '<p>Communication strategies for staff, stakeholders, media and clients, plus internal escalation protocols must be defined.</p>',
    guidance: '<p>Develop communication templates for each stakeholder group. Define escalation triggers and timelines. Implement automated notification systems. Test communication procedures regularly.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(d)'
  },
  'DORA||Art. 17(3)(e)': {
    title: 'Incident Management — Senior Management Escalation',
    text: '<p>Major incidents must be escalated to senior management and the board with impact assessments.</p>',
    guidance: '<p>Define escalation criteria for major incidents. Prepare impact assessment templates. Establish rapid communication channels to senior management. Brief the board on significant incidents.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(e)'
  },
  'DORA||Art. 17(3)(f)': {
    title: 'Incident Management — Response Procedures',
    text: '<p>Response procedures designed to minimise disruption and restore secure operations promptly.</p>',
    guidance: '<p>Develop playbooks for common incident types. Include containment, eradication and recovery steps. Define decision criteria for containment strategies. Test procedures through regular exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 17(3)(f)'
  },
  'DORA||Art. 18(1)': {
    title: 'Incident Classification — Impact Criteria',
    text: '<p>Financial entities shall classify ICT incidents using six criteria: affected clients/transactions, incident duration, geographical spread, data losses, criticality of impacted services, and economic costs.</p>',
    guidance: '<p>Implement classification criteria aligned with the six DORA dimensions. Automate classification where possible. Train staff on consistent application. Review classifications periodically.</p>',
    source: 'DORA (EU) 2022/2554, Article 18(1)'
  },
  'DORA||Art. 18(2)': {
    title: 'Incident Classification — Cyber Threat Categorization',
    text: '<p>Financial entities shall categorize cyber threats as significant based on criticality of at-risk services, number of targeted clients, and geographical scope.</p>',
    guidance: '<p>Define significance thresholds for cyber threats. Assess threats against criticality of targeted services. Consider geographic scope and client impact. Document categorisation rationale.</p>',
    source: 'DORA (EU) 2022/2554, Article 18(2)'
  },
  'DORA||Art. 19(1)': {
    title: 'Incident Reporting — Major Incident Reporting',
    text: '<p>Financial entities must report major ICT-related incidents to competent authorities when they have high adverse impact on systems supporting critical functions.</p>',
    guidance: '<p>Establish reporting procedures aligned with regulatory requirements. Define what constitutes a major incident. Prepare reporting templates. Ensure timely submission within required deadlines.</p>',
    source: 'DORA (EU) 2022/2554, Article 19(1)'
  },
  'DORA||Art. 19(3)': {
    title: 'Incident Reporting — Client Notification',
    text: '<p>When major incidents affect client finances, entities must promptly inform clients and advise on protective measures for significant threats.</p>',
    guidance: '<p>Define client notification triggers and timelines. Prepare client communication templates. Include protective advice in notifications. Maintain client contact databases for rapid notification.</p>',
    source: 'DORA (EU) 2022/2554, Article 19(3)'
  },
  'DORA||Art. 19(4)': {
    title: 'Incident Reporting — Report Submissions',
    text: '<p>Entities must submit initial notifications, intermediate reports and final reports within established timeframes.</p>',
    guidance: '<p>Implement a three-stage reporting process (initial, intermediate, final). Define internal deadlines for each stage. Automate report generation where possible. Track submission compliance.</p>',
    source: 'DORA (EU) 2022/2554, Article 19(4)'
  },
  'DORA||Art. 20(1)': {
    title: 'Reporting Harmonisation — Content and Templates',
    text: '<p>Incident reports must use standardised content and templates reflecting Article 18 classification criteria.</p>',
    guidance: '<p>Adopt regulatory reporting templates. Map internal incident data to required report fields. Automate data extraction for reporting. Test reporting processes through exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 20(1)'
  },
  // ── DORA Chapter IV: Digital Operational Resilience Testing ──────
  'DORA||Art. 24(1)': {
    title: 'Resilience Testing — Programme Establishment',
    text: '<p>Financial entities must establish a comprehensive digital operational resilience testing programme as part of their ICT risk management framework to assess preparedness, identify weaknesses, and implement corrective measures.</p>',
    guidance: '<p>Develop a multi-year testing programme. Include various testing types. Align testing with risk profile. Allocate adequate budget and resources for the programme.</p>',
    source: 'DORA (EU) 2022/2554, Article 24(1)'
  },
  'DORA||Art. 24(3)': {
    title: 'Resilience Testing — Risk-Based Approach',
    text: '<p>Entities must employ a risk-based approach when conducting tests, considering evolving ICT risks, entity-specific exposures, criticality of information assets, and service provision factors.</p>',
    guidance: '<p>Prioritise testing of highest-risk areas. Consider threat landscape changes when planning tests. Focus on critical assets and services. Adjust testing intensity based on risk profile.</p>',
    source: 'DORA (EU) 2022/2554, Article 24(3)'
  },
  'DORA||Art. 24(4)': {
    title: 'Resilience Testing — Independence',
    text: '<p>Tests must be performed by independent parties with sufficient resources and conflict-of-interest safeguards.</p>',
    guidance: '<p>Ensure testing independence from development and operations teams. Use qualified external testers for critical tests. Implement conflict-of-interest policies. Verify tester qualifications.</p>',
    source: 'DORA (EU) 2022/2554, Article 24(4)'
  },
  'DORA||Art. 24(5)': {
    title: 'Resilience Testing — Remediation',
    text: '<p>Entities shall establish procedures to prioritize, classify and remedy testing-identified issues, plus validate that weaknesses are fully addressed.</p>',
    guidance: '<p>Implement a findings management process. Prioritise remediation by risk severity. Track remediation to closure. Conduct verification testing to confirm fixes are effective.</p>',
    source: 'DORA (EU) 2022/2554, Article 24(5)'
  },
  'DORA||Art. 24(6)': {
    title: 'Resilience Testing — Annual Testing of Critical Systems',
    text: '<p>At minimum annually, entities must test all ICT systems and applications supporting critical or important functions.</p>',
    guidance: '<p>Identify all systems supporting critical functions. Schedule annual testing cycles. Include functional, security and resilience testing. Document results and track improvements.</p>',
    source: 'DORA (EU) 2022/2554, Article 24(6)'
  },
  'DORA||Art. 25(1)': {
    title: 'ICT Testing — Range of Tests',
    text: '<p>Testing programmes must include vulnerability assessments, scans, open source analyses, network security assessments, gap analyses, physical security reviews, penetration testing, and more.</p>',
    guidance: '<p>Implement a comprehensive testing toolkit. Conduct regular vulnerability scans and penetration tests. Include source code reviews for critical applications. Perform physical security assessments.</p>',
    source: 'DORA (EU) 2022/2554, Article 25(1)'
  },
  'DORA||Art. 25(2)': {
    title: 'ICT Testing — Pre-Deployment Assessments',
    text: '<p>Central securities depositories and central counterparties must conduct vulnerability assessments before deploying new or existing applications for critical functions.</p>',
    guidance: '<p>Integrate security testing into the deployment pipeline. Conduct vulnerability assessments before go-live. Implement security gates in CI/CD processes. Address critical findings before deployment.</p>',
    source: 'DORA (EU) 2022/2554, Article 25(2)'
  },
  'DORA||Art. 26(1)': {
    title: 'TLPT — Triennial Requirement',
    text: '<p>Financial entities shall carry out threat-led penetration testing (TLPT) at least every 3 years, with competent authorities able to adjust frequency based on risk profile.</p>',
    guidance: '<p>Plan TLPT on a 3-year cycle. Engage qualified external providers. Follow TIBER-EU or equivalent national framework. Budget adequately for comprehensive testing.</p>',
    source: 'DORA (EU) 2022/2554, Article 26(1)'
  },
  'DORA||Art. 26(2)': {
    title: 'TLPT — Scope and Coverage',
    text: '<p>TLPT must cover critical or important functions on live production systems, identifying all underlying ICT systems, processes and technologies.</p>',
    guidance: '<p>Scope TLPT to cover all critical functions. Map supporting ICT infrastructure. Test on live production systems with appropriate safeguards. Include outsourced services where relevant.</p>',
    source: 'DORA (EU) 2022/2554, Article 26(2)'
  },
  'DORA||Art. 26(4)': {
    title: 'TLPT — Third-Party Provider Participation',
    text: '<p>When third-party service providers participate in TLPT, entities retain full responsibility and must ensure cooperation through necessary safeguards.</p>',
    guidance: '<p>Include contractual provisions for TLPT participation. Coordinate testing with providers. Implement risk controls during testing. Ensure provider cooperation without compromising test integrity.</p>',
    source: 'DORA (EU) 2022/2554, Article 26(4)'
  },
  'DORA||Art. 26(7)': {
    title: 'TLPT — Findings and Compliance',
    text: '<p>Entities must provide authorities with findings summaries, remediation plans and compliance documentation following testing.</p>',
    guidance: '<p>Document TLPT findings comprehensively. Develop prioritised remediation plans. Prepare compliance documentation for regulatory submission. Track remediation progress.</p>',
    source: 'DORA (EU) 2022/2554, Article 26(7)'
  },
  'DORA||Art. 27(1)': {
    title: 'TLPT Testers — Qualifications',
    text: '<p>TLPT testers must demonstrate highest suitability, possess expertise in threat intelligence and penetration testing, hold relevant certifications, and maintain professional indemnity insurance.</p>',
    guidance: '<p>Define tester selection criteria aligned with Article 27 requirements. Verify certifications (CREST, OSCP, etc.). Check professional indemnity insurance. Assess independence and ethical frameworks.</p>',
    source: 'DORA (EU) 2022/2554, Article 27(1)'
  },
  'DORA||Art. 27(3)': {
    title: 'TLPT Testers — Data Security',
    text: '<p>Contracts with external testers must ensure secure management of test results and data processing, preventing risks through proper handling of TLPT-related information.</p>',
    guidance: '<p>Include data security provisions in tester contracts. Define secure handling of test results. Specify data retention and destruction requirements. Implement secure communication channels.</p>',
    source: 'DORA (EU) 2022/2554, Article 27(3)'
  },
  // ── DORA Chapter V: Managing ICT Third-Party Risk ───────────────
  'DORA||Art. 28(1)': {
    title: 'Third-Party Risk — Framework Integration',
    text: '<p>Financial entities shall manage ICT third-party risk as an integral component of ICT risk within their ICT risk management framework.</p>',
    guidance: '<p>Embed third-party ICT risk management into the overall risk framework. Ensure consistent risk assessment methodology. Report third-party risks alongside other ICT risks.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(1)'
  },
  'DORA||Art. 28(2)': {
    title: 'Third-Party Risk — Strategy',
    text: '<p>Entities shall adopt and regularly review a comprehensive strategy addressing third-party ICT risks, applying proportionality based on dependency nature, scale and service criticality.</p>',
    guidance: '<p>Develop a third-party ICT risk strategy. Review at least annually. Apply proportionate controls based on provider criticality. Include concentration risk considerations.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(2)'
  },
  'DORA||Art. 28(3)': {
    title: 'Third-Party Risk — Service Register',
    text: '<p>Entities must maintain updated registers documenting all ICT service arrangements, distinguish critical function agreements, and report yearly on new arrangements.</p>',
    guidance: '<p>Maintain a comprehensive register of all ICT service providers. Flag arrangements supporting critical functions. Report new arrangements to competent authorities annually. Keep the register current.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(3)'
  },
  'DORA||Art. 28(4)': {
    title: 'Third-Party Risk — Pre-Contract Assessment',
    text: '<p>Before contracting, entities must assess whether arrangements cover critical functions, evaluate supervisory conditions, identify relevant risks including concentration risk, and conduct due diligence.</p>',
    guidance: '<p>Implement a structured pre-contract assessment process. Include concentration risk evaluation. Conduct comprehensive due diligence. Assess supervisory implications and potential conflicts.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(4)'
  },
  'DORA||Art. 28(5)': {
    title: 'Third-Party Risk — Security Standards',
    text: '<p>Entities may only contract with providers meeting appropriate security standards, with heightened standards for critical functions.</p>',
    guidance: '<p>Define minimum security standards for all providers. Apply enhanced standards for critical function providers. Verify standards through assessments and certifications. Monitor ongoing compliance.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(5)'
  },
  'DORA||Art. 28(6)': {
    title: 'Third-Party Risk — Audit Rights',
    text: '<p>Entities must predetermine audit frequencies and areas using risk-based approaches and verify auditor competency for complex arrangements.</p>',
    guidance: '<p>Define risk-based audit schedules for providers. Include audit rights in contracts. Use qualified auditors for technical assessments. Review audit reports and track findings.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(6)'
  },
  'DORA||Art. 28(7)': {
    title: 'Third-Party Risk — Termination Rights',
    text: '<p>Contracts must permit termination for: significant breaches, monitored risk changes, provider ICT weaknesses, or supervisory impediments.</p>',
    guidance: '<p>Include comprehensive termination clauses in contracts. Define specific termination triggers. Ensure notice periods allow for orderly transition. Link to exit strategy requirements.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(7)'
  },
  'DORA||Art. 28(8)': {
    title: 'Third-Party Risk — Exit Strategies',
    text: '<p>Exit strategies for critical functions must address provider failure risks, ensure business continuity, include documented transition plans, identify alternatives, and maintain contingency measures.</p>',
    guidance: '<p>Develop exit plans for all critical providers. Include data portability provisions. Define transition timelines. Identify alternative providers. Test exit plans through tabletop exercises.</p>',
    source: 'DORA (EU) 2022/2554, Article 28(8)'
  },
  'DORA||Art. 29(1)': {
    title: 'Concentration Risk — Entity-Level Assessment',
    text: '<p>Financial entities must evaluate whether contracting with non-easily substitutable ICT providers or maintaining multiple arrangements with the same provider creates concentration risk.</p>',
    guidance: '<p>Map dependencies to identify concentration points. Assess substitutability of providers. Evaluate cost-benefit of diversification. Document concentration risk assessments.</p>',
    source: 'DORA (EU) 2022/2554, Article 29(1)'
  },
  'DORA||Art. 29(2)': {
    title: 'Concentration Risk — Subcontracting and Third-Country Risks',
    text: '<p>Entities must evaluate subcontracting risks, insolvency law implications, data protection compliance, and whether complex subcontracting chains impair monitoring capability.</p>',
    guidance: '<p>Assess subcontracting chains for critical services. Evaluate third-country legal and regulatory risks. Ensure data protection compliance across the chain. Verify monitoring capability is maintained.</p>',
    source: 'DORA (EU) 2022/2554, Article 29(2)'
  },
  'DORA||Art. 30(1)': {
    title: 'Contractual Provisions — Written Documentation',
    text: '<p>Rights and obligations must be clearly allocated and documented in a single written contract available in accessible format.</p>',
    guidance: '<p>Use comprehensive contract templates. Ensure all rights and obligations are documented. Maintain contracts in accessible formats. Review contracts for completeness before execution.</p>',
    source: 'DORA (EU) 2022/2554, Article 30(1)'
  },
  'DORA||Art. 30(2)': {
    title: 'Contractual Provisions — Required Contract Terms',
    text: '<p>All ICT contracts must include: service descriptions, subcontracting conditions, service locations, data protection provisions, SLAs, incident assistance, cooperation requirements, and termination rights.</p>',
    guidance: '<p>Use a contractual checklist covering all Article 30(2) requirements. Ensure SLAs are measurable and enforceable. Include data protection provisions aligned with GDPR. Define incident notification timelines.</p>',
    source: 'DORA (EU) 2022/2554, Article 30(2)'
  },
  'DORA||Art. 30(3)': {
    title: 'Contractual Provisions — Critical Function Requirements',
    text: '<p>Contracts for critical functions must additionally include performance targets, notification obligations, business continuity measures, TLPT participation, monitoring rights, and exit strategies.</p>',
    guidance: '<p>Apply enhanced contractual requirements for critical function providers. Define precise performance targets. Include mandatory TLPT participation. Ensure comprehensive audit and inspection rights.</p>',
    source: 'DORA (EU) 2022/2554, Article 30(3)'
  },
  'DORA||Art. 31(1)': {
    title: 'Critical Provider Designation — Awareness and Alignment',
    text: '<p>The ESAs shall designate critical ICT third-party service providers based on systemic impact, systemic importance, concentration of functions, and substitutability.</p>',
    guidance: '<p>Monitor ESA publications for critical provider designations. Assess own provider portfolio against designation criteria. Understand implications for oversight and reporting requirements.</p>',
    source: 'DORA (EU) 2022/2554, Article 31(1)'
  },
  'DORA||Art. 45(1)': {
    title: 'Information Sharing — Threat Intelligence',
    text: '<p>Financial entities may exchange cyber threat data and intelligence among themselves within trusted communities, respecting confidentiality, data protection and competition policy.</p>',
    guidance: '<p>Evaluate and join relevant information sharing communities (e.g., FS-ISAC). Define internal processes for sharing and receiving threat intelligence. Implement safeguards for data protection and competition compliance.</p>',
    source: 'DORA (EU) 2022/2554, Article 45(1)'
  },
  'DORA||Art. 45(2)': {
    title: 'Information Sharing — Governance',
    text: '<p>Information-sharing arrangements must define participation conditions and may specify how public authorities and ICT third-party service providers participate.</p>',
    guidance: '<p>Define governance for information sharing participation. Establish conditions for what information can be shared. Include provisions for public authority and provider participation where appropriate.</p>',
    source: 'DORA (EU) 2022/2554, Article 45(2)'
  },
  'DORA||Art. 45(3)': {
    title: 'Information Sharing — Regulatory Notification',
    text: '<p>Financial entities must notify their competent authorities when joining or leaving information-sharing arrangements.</p>',
    guidance: '<p>Establish notification procedures for sharing arrangement membership changes. Maintain records of all sharing arrangements. Notify competent authorities promptly upon joining or leaving.</p>',
    source: 'DORA (EU) 2022/2554, Article 45(3)'
  },

  // ── NIS2 ───────────────────────────────────────────────────────────
  'NIS2||Art. 20': {
    title: 'Governance',
    text: '<p>Member States shall ensure that the management bodies of essential and important entities approve the cybersecurity risk-management measures taken by those entities, oversee their implementation, and can be held accountable for any non-compliance.</p>',
    guidance: '<p>Establish formal board-level oversight of cybersecurity risk. Require management body approval of cybersecurity policies and strategies. Implement mandatory cybersecurity training for board members and senior management. Define personal accountability for cybersecurity governance.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 20'
  },
  'NIS2||Art. 20(2)': {
    title: 'Governance — Management Body Training',
    text: '<p>Member States shall ensure that the members of the management bodies are required to follow training, and shall encourage essential and important entities to offer similar training to their employees on a regular basis.</p>',
    guidance: '<p>Implement mandatory cybersecurity awareness training for all management body members. Develop role-specific training programmes for different employee groups. Conduct regular phishing simulations and social engineering exercises. Track training completion and measure knowledge improvement.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 20(2)'
  },
  'NIS2||Art. 21(1)': {
    title: 'Cybersecurity Risk-Management Measures — General Requirements',
    text: '<p>Member States shall ensure that essential and important entities take appropriate and proportionate technical, operational and organisational measures to manage the risks posed to the security of network and information systems.</p>',
    guidance: '<p>Adopt an all-hazards approach to cybersecurity risk management. Implement a risk-based methodology proportionate to the entity\'s size, exposure, and criticality of services. Align with recognised international standards (ISO 27001, NIST CSF). Document the risk management framework and review it at least annually.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(1)'
  },
  'NIS2||Art. 21(2)(a)': {
    title: 'Risk-Management Measures — Risk Analysis and Information System Security',
    text: '<p>The measures shall include at least policies on risk analysis and information system security.</p>',
    guidance: '<p>Establish formal risk analysis policies and procedures covering asset identification, threat assessment, vulnerability management, and impact evaluation. Implement network security controls including segmentation, firewalls, and intrusion detection. Conduct regular security assessments and penetration tests.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(a)'
  },
  'NIS2||Art. 21(2)(b)': {
    title: 'Risk-Management Measures — Incident Handling',
    text: '<p>The measures shall include at least incident handling procedures and capabilities.</p>',
    guidance: '<p>Establish and maintain incident detection, analysis, and response capabilities. Define incident classification criteria and severity levels. Implement 24/7 monitoring capabilities. Develop incident response playbooks for common scenarios. Conduct regular incident response exercises.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(b)'
  },
  'NIS2||Art. 21(2)(c)': {
    title: 'Risk-Management Measures — Business Continuity and Crisis Management',
    text: '<p>The measures shall include at least business continuity, such as backup management and disaster recovery, and crisis management.</p>',
    guidance: '<p>Develop and maintain business continuity and disaster recovery plans for all critical services. Implement robust backup strategies including immutable and off-site backups. Define and test RTOs and RPOs. Establish crisis management procedures with clear decision-making authority.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(c)'
  },
  'NIS2||Art. 21(2)(d)': {
    title: 'Risk-Management Measures — Supply Chain Security',
    text: '<p>The measures shall include at least supply chain security, including security-related aspects concerning the relationships between each entity and its direct suppliers or service providers.</p>',
    guidance: '<p>Assess cybersecurity risks from direct suppliers and service providers. Include security requirements in procurement processes and contractual agreements. Monitor supplier security posture on an ongoing basis. Evaluate supply chain concentration risks. Develop contingency plans for supply chain disruptions.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(d)'
  },
  'NIS2||Art. 21(2)(e)': {
    title: 'Risk-Management Measures — Security in Acquisition, Development and Maintenance',
    text: '<p>The measures shall include at least security in network and information systems acquisition, development and maintenance, including vulnerability handling and disclosure.</p>',
    guidance: '<p>Integrate security into the system development lifecycle (SDLC). Implement secure coding standards and practices. Conduct security testing (SAST, DAST, SCA) during development. Establish vulnerability handling and coordinated disclosure procedures. Implement patch management processes with risk-based prioritisation.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(e)'
  },
  'NIS2||Art. 21(2)(h)': {
    title: 'Risk-Management Measures — Cryptography and Encryption',
    text: '<p>The measures shall include at least policies and procedures regarding the use of cryptography and, where appropriate, encryption.</p>',
    guidance: '<p>Develop and implement a cryptography policy specifying approved algorithms, key lengths, and protocols. Ensure encryption of sensitive data at rest and in transit. Implement key management procedures covering the full cryptographic lifecycle. Plan for cryptographic agility including post-quantum readiness.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(h)'
  },
  'NIS2||Art. 21(2)(i)': {
    title: 'Risk-Management Measures — Human Resources Security and Access Control',
    text: '<p>The measures shall include at least human resources security, access control policies and asset management.</p>',
    guidance: '<p>Implement pre-employment screening procedures. Define access control policies based on the principle of least privilege. Conduct regular access reviews and recertification. Implement identity and access management (IAM) solutions. Establish procedures for joiner, mover and leaver processes.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(i)'
  },
  'NIS2||Art. 21(2)(j)': {
    title: 'Risk-Management Measures — Multi-Factor Authentication',
    text: '<p>The measures shall include at least the use of multi-factor authentication or continuous authentication solutions, secured voice, video and text communications and secured emergency communication systems.</p>',
    guidance: '<p>Deploy multi-factor authentication for all users, prioritising privileged and remote access. Implement phishing-resistant MFA methods (FIDO2/WebAuthn) where feasible. Secure internal communications channels. Establish out-of-band emergency communication capabilities.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(2)(j)'
  },
  'NIS2||Art. 21(3)': {
    title: 'Risk-Management Measures — Proportionality and Supply Chain',
    text: '<p>Member States shall ensure that entities take into account the vulnerabilities specific to each direct supplier and service provider and the overall quality of products and cybersecurity practices of their suppliers.</p>',
    guidance: '<p>Adopt a risk-based approach to supplier management proportionate to criticality. Assess supplier-specific vulnerabilities and security maturity. Evaluate the security quality of products and services procured. Consider cascading risks through the supply chain (fourth-party risk). Develop exit strategies for critical supplier dependencies.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 21(3)'
  },
  'NIS2||Art. 23': {
    title: 'Reporting Obligations',
    text: '<p>Member States shall ensure that essential and important entities notify their CSIRT or competent authority of any incident that has a significant impact. An early warning within 24 hours, an incident notification within 72 hours, and a final report not later than one month.</p>',
    guidance: '<p>Implement incident classification criteria aligned with NIS2 significance thresholds. Establish internal escalation and notification workflows that meet 24h/72h/1m timelines. Prepare template notifications for early warning, incident notification, and final report. Conduct exercises that include regulatory notification procedures.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 23'
  },
  'NIS2||Art. 23(4)': {
    title: 'Reporting Obligations — Final Report',
    text: '<p>Not later than one month after the incident notification, the entity shall submit a final report including a detailed description of the incident including its severity and impact, the type of threat or root cause, applied and ongoing mitigation measures, and the cross-border impact where applicable.</p>',
    guidance: '<p>Establish a post-incident reporting process that captures root cause analysis, impact assessment, and remediation actions. Define templates for the final report covering all elements required by NIS2. Ensure cross-functional input (IT, legal, communications, business) in final report preparation.</p>',
    source: 'NIS2 Directive (EU) 2022/2555, Article 23(4)'
  },

  // ── ISF SOGP ───────────────────────────────────────────────────────
  'ISF SOGP||CF2.1': {
    title: 'CF2.1 — Access Control Management',
    text: '<p>Access to information and systems shall be controlled using a formal access management process. Access rights shall be allocated based on business need and the principle of least privilege.</p>',
    guidance: '<p>Implement a centralised access management system with role-based access control (RBAC). Define access profiles for common roles and enforce approval workflows. Integrate with HR systems for automated provisioning/de-provisioning. Apply enhanced controls for privileged and administrative access.</p>',
    source: 'ISF Standard of Good Practice 2024, CF2.1'
  },
  'ISF SOGP||CF2.2': {
    title: 'CF2.2 — Access Review and Recertification',
    text: '<p>Access rights shall be reviewed at regular intervals to ensure they remain appropriate to business needs. Privileged access rights shall be reviewed more frequently.</p>',
    guidance: '<p>Establish quarterly access reviews for privileged accounts and semi-annual reviews for standard access. Implement automated tooling to support the recertification process. Require positive confirmation from access owners. Track and escalate overdue reviews.</p>',
    source: 'ISF Standard of Good Practice 2024, CF2.2'
  },
  'ISF SOGP||CF2.3': {
    title: 'CF2.3 — Authentication Mechanisms',
    text: '<p>Authentication mechanisms shall be appropriate to the sensitivity of the information or system being accessed. Multi-factor authentication shall be required for access to critical systems, remote access, and privileged accounts.</p>',
    guidance: '<p>Deploy MFA for all remote access, privileged accounts, and access to systems processing sensitive data. Implement phishing-resistant authentication methods where feasible. Monitor authentication events for anomalous patterns. Consider passwordless authentication strategies.</p>',
    source: 'ISF Standard of Good Practice 2024, CF2.3'
  },
  'ISF SOGP||SM2.1': {
    title: 'SM2.1 — Incident Response Planning',
    text: '<p>An incident response plan shall be established and maintained that defines roles, responsibilities, and procedures for responding to information security incidents.</p>',
    guidance: '<p>Develop a comprehensive incident response plan (IRP) with clear scope and objectives. Define an incident response team with assigned roles and contact details. Create incident playbooks for common attack scenarios. Conduct tabletop exercises at least quarterly and live exercises annually.</p>',
    source: 'ISF Standard of Good Practice 2024, SM2.1'
  },
  'ISF SOGP||SM2.2': {
    title: 'SM2.2 — Incident Detection and Monitoring',
    text: '<p>Monitoring and detection capabilities shall be established to identify information security events and incidents in a timely manner, including real-time monitoring of critical systems and correlation of security events.</p>',
    guidance: '<p>Implement a Security Operations Centre (SOC) with 24/7 monitoring for critical assets. Deploy SIEM technology with regularly tuned correlation rules. Establish baselines for normal behaviour to support anomaly detection. Implement endpoint detection and response (EDR) across the estate.</p>',
    source: 'ISF Standard of Good Practice 2024, SM2.2'
  },
  'ISF SOGP||SM2.3': {
    title: 'SM2.3 — Post-Incident Review and Improvement',
    text: '<p>A structured post-incident review process shall be conducted following significant information security incidents. Reviews shall identify root causes and generate actionable recommendations.</p>',
    guidance: '<p>Conduct post-incident reviews within two weeks of incident closure. Use blameless retrospective techniques. Document root causes, timeline of events, and response effectiveness. Generate and track remediation actions with assigned owners and deadlines.</p>',
    source: 'ISF Standard of Good Practice 2024, SM2.3'
  },
  'ISF SOGP||SY1.2': {
    title: 'SY1.2 — Supplier Security Assessment',
    text: '<p>Suppliers that access, process, or store the organisation\'s information shall be subject to a security assessment prior to engagement and at regular intervals thereafter.</p>',
    guidance: '<p>Define a supplier tiering methodology based on criticality and data sensitivity. Conduct pre-engagement security due diligence using questionnaires, certifications, and on-site assessments for critical suppliers. Reassess critical suppliers annually.</p>',
    source: 'ISF Standard of Good Practice 2024, SY1.2'
  },
  'ISF SOGP||SY1.3': {
    title: 'SY1.3 — Supplier Contractual Requirements',
    text: '<p>Contracts with suppliers shall include appropriate information security requirements addressing confidentiality, integrity, availability, incident notification, audit rights, and provisions for termination.</p>',
    guidance: '<p>Develop standard security clauses for inclusion in all supplier contracts. Require incident notification within defined timeframes. Include right-to-audit provisions and regulatory access clauses. Define data handling requirements. Ensure contracts align with DORA, NIS2 and other applicable regulatory requirements.</p>',
    source: 'ISF Standard of Good Practice 2024, SY1.3'
  },
  'ISF SOGP||SY1.4': {
    title: 'SY1.4 — Supplier Monitoring and Exit Management',
    text: '<p>Ongoing monitoring of supplier security performance shall be conducted. Exit strategies shall be in place for all critical suppliers to enable orderly transition without undue disruption.</p>',
    guidance: '<p>Define KPIs and SLAs for supplier security performance and review regularly. Implement continuous monitoring tools. Conduct periodic audits of critical suppliers. Develop and maintain exit plans for each critical supplier. Test exit procedures through tabletop exercises.</p>',
    source: 'ISF Standard of Good Practice 2024, SY1.4'
  },
  'ISF SOGP||BC1.1': {
    title: 'BC1.1 — Business Continuity Planning',
    text: '<p>Business continuity plans shall be developed and maintained to ensure the continued availability of critical business functions and supporting information systems in the event of disruption.</p>',
    guidance: '<p>Conduct business impact analysis (BIA) to identify critical functions and their dependencies. Define recovery priorities, RTOs, and RPOs for each critical function. Develop detailed recovery procedures for key scenarios. Establish crisis management teams with clear authority.</p>',
    source: 'ISF Standard of Good Practice 2024, BC1.1'
  },
  'ISF SOGP||BC1.3': {
    title: 'BC1.3 — Disaster Recovery Testing',
    text: '<p>Disaster recovery plans shall be tested at regular intervals to verify their effectiveness and to identify gaps or deficiencies, including technical recovery of systems and data.</p>',
    guidance: '<p>Conduct full disaster recovery tests at least annually for critical systems. Include testing of backup restoration, system failover, and data integrity verification. Validate that RTOs and RPOs are achievable under realistic conditions. Document test results and corrective actions.</p>',
    source: 'ISF Standard of Good Practice 2024, BC1.3'
  },
  'ISF SOGP||BC1.4': {
    title: 'BC1.4 — Resilience Testing',
    text: '<p>The organisation shall conduct advanced resilience testing to evaluate its ability to withstand and recover from sophisticated cyber attacks and operational disruptions.</p>',
    guidance: '<p>Design resilience testing programmes that go beyond traditional DR testing. Include threat-led penetration testing (TLPT) for critical functions. Conduct organisation-wide crisis simulation exercises involving senior management. Test inter-dependencies between business functions and technology systems.</p>',
    source: 'ISF Standard of Good Practice 2024, BC1.4'
  },
  'ISF SOGP||IR1.1': {
    title: 'IR1.1 — Information Classification',
    text: '<p>Information shall be classified according to its value, sensitivity, and criticality to the organisation. A classification scheme shall be established that defines classification levels and the criteria for assigning them.</p>',
    guidance: '<p>Define a clear classification scheme with at least three levels. Assign information owners responsible for classification decisions. Implement labelling procedures for digital and physical assets. Define handling requirements for each classification level. Consider automated classification tools for large-scale environments.</p>',
    source: 'ISF Standard of Good Practice 2024, IR1.1'
  },
  'ISF SOGP||IR1.3': {
    title: 'IR1.3 — Cryptographic Protection',
    text: '<p>Cryptographic controls shall be applied to protect the confidentiality, integrity, and authenticity of information in accordance with the organisation\'s classification scheme and risk appetite.</p>',
    guidance: '<p>Define approved cryptographic algorithms and minimum key lengths. Encrypt all data classified as Confidential or above, both at rest and in transit. Use TLS 1.2 or higher for all network communications. Implement certificate management processes. Plan for post-quantum migration readiness.</p>',
    source: 'ISF Standard of Good Practice 2024, IR1.3'
  },
  'ISF SOGP||IR1.4': {
    title: 'IR1.4 — Cryptographic Key Management',
    text: '<p>A key management policy and supporting procedures shall be established to manage the lifecycle of cryptographic keys, including generation, distribution, storage, rotation, revocation, and destruction.</p>',
    guidance: '<p>Implement a formal key management policy covering the full key lifecycle. Use hardware security modules (HSMs) for high-value keys. Define key rotation schedules based on risk. Implement automated key management where feasible. Conduct regular audits of key management practices.</p>',
    source: 'ISF Standard of Good Practice 2024, IR1.4'
  },
  'ISF SOGP||SG1.1': {
    title: 'SG1.1 — Information Security Policy',
    text: '<p>A high-level information security policy shall be established that defines the organisation\'s commitment to information security, sets the strategic direction, and assigns overall responsibilities. The policy shall be approved by the board.</p>',
    guidance: '<p>Ensure the security policy is concise, business-aligned, and approved at board level. Communicate the policy to all employees, contractors, and relevant third parties. Support the high-level policy with topic-specific policies. Review and update at least annually.</p>',
    source: 'ISF Standard of Good Practice 2024, SG1.1'
  },
  'ISF SOGP||SG1.2': {
    title: 'SG1.2 — Information Security Risk Management',
    text: '<p>A risk management approach shall be established to identify, assess, treat, and monitor information security risks. The approach shall be aligned with the organisation\'s enterprise risk management framework.</p>',
    guidance: '<p>Adopt a structured risk management methodology (e.g. ISO 27005, NIST SP 800-30, ISF IRAM2). Maintain a risk register covering all significant information security risks. Conduct risk assessments at least annually. Define risk acceptance criteria and escalation thresholds.</p>',
    source: 'ISF Standard of Good Practice 2024, SG1.2'
  },
  'ISF SOGP||SG2.1': {
    title: 'SG2.1 — Security Awareness and Training',
    text: '<p>An information security awareness and training programme shall be established to ensure that all individuals understand their responsibilities and are equipped with the knowledge and skills to fulfil them.</p>',
    guidance: '<p>Develop a multi-tiered awareness programme covering all staff, with enhanced training for high-risk roles. Include practical exercises such as phishing simulations. Deliver awareness content through multiple channels. Measure effectiveness through assessments and behaviour metrics.</p>',
    source: 'ISF Standard of Good Practice 2024, SG2.1'
  },
  'ISF SOGP||NW1.1': {
    title: 'NW1.1 — Network Security Architecture',
    text: '<p>The organisation\'s network shall be designed and managed to provide adequate protection for information and systems. Network segmentation shall be implemented to isolate systems of different trust levels.</p>',
    guidance: '<p>Design network architecture with defence-in-depth principles. Implement segmentation using VLANs, firewalls, and micro-segmentation. Apply zero-trust principles where feasible. Maintain up-to-date network architecture diagrams. Conduct regular firewall rule reviews.</p>',
    source: 'ISF Standard of Good Practice 2024, NW1.1'
  },
  'ISF SOGP||NW1.2': {
    title: 'NW1.2 — Secure Configuration Management',
    text: '<p>Systems and network devices shall be configured securely in accordance with approved hardening standards. Configuration baselines shall be established and deviations shall be monitored.</p>',
    guidance: '<p>Define and maintain secure configuration baselines (CIS Benchmarks or equivalent). Implement automated configuration management and compliance scanning. Monitor for configuration drift. Integrate configuration checks into the change management process. Remove unnecessary services, ports, and accounts.</p>',
    source: 'ISF Standard of Good Practice 2024, NW1.2'
  },
  'ISF SOGP||NW1.3': {
    title: 'NW1.3 — Vulnerability Management',
    text: '<p>A vulnerability management process shall be established to identify, evaluate, and remediate technical vulnerabilities in a timely manner with regular scanning and risk-based prioritisation.</p>',
    guidance: '<p>Conduct vulnerability scanning at least monthly for external-facing assets and quarterly for internal systems. Implement risk-based prioritisation considering asset criticality and exploitability. Define remediation SLAs: Critical 72h, High 14d, Medium 30d. Track and report on remediation metrics.</p>',
    source: 'ISF Standard of Good Practice 2024, NW1.3'
  },
};

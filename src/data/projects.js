export const projects = [
  {
    id: 1,
    title: 'Microsoft Office – Infor PLM Cloud Integration',
    tech: 'C#, C++, .NET',
    description: 'Seamless saving of Office files from OneDrive into PLM Cloud with batch upload support.',
    impact: 'Enabled multiple customers to efficiently centralize and manage their diverse Office files in the cloud.',
    details: 'Integrated Infor PLM Cloud with Microsoft applications by leveraging Microsoft APIs to enable seamless saving of Office files (Word, Excel, PowerPoint) from OneDrive to PLM Cloud. : Developed batch register functionality to efficiently upload and manage large volumes of files through Microsoft APIs.',
    techStack: {
      languages: ['C++', 'C#'],
      frameworks: ['.NET'],
      apis: ['Microsoft Graph API', 'OneDrive API'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  },
  {
    id: 2,
    title: 'Custom Defined Fields – CAD Integration',
    tech: 'C++, C#, SQL, 4GL',
    description: 'Enabled synchronization of ERP-defined custom fields with CAD integration during data save.',
    impact: 'Improved data consistency and enabled design-specific customization for all customers',
    details: 'Designed and implemented logic in the CAD Integration toolkit to support updating Custom Defined Fields (CDFs) during data save from CAD. Modified both integration-layer code and server-side save logic to ensure CDF data was stored along with standard fields.: Enhanced database table structures and workflows to persist custom field values in their respective tables, enabling seamless ERP–CAD synchronization and supporting customer-specific configurations.',
    techStack: {
      languages: ['C++', 'C#', 'SQL', '4GL'],
      frameworks: ['.NET'],
      apis: [],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'Eclipse']
    }
  },
  {
    id: 3,
    title: 'Performance Optimization – CAD Integration',
    tech: 'C++, C#, SQL, 4GL',
    description: 'Improved CAD–PLM data save performance through multi-threading and optimized server-side processing.',
    impact: 'Reduced data save time by 70–80% and improved system reliability for large-scale operations',
    details: 'Optimized CAD–PLM integration workflows by enhancing multi-threaded Toolkit and server-side logic. : Designed and implemented JSON-based request handling to coordinate multiple interlinked database save operations. : Used concurrency techniques including request orchestration, synchronization, and multi-threading to provide high performance, fault tolerance, and dependable large-scale data processing in Infor PLM Cloud..',
    techStack: {
      languages: ['C++', 'C#', 'SQL', '4GL'],
      frameworks: ['.NET'],
      apis: [],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'Eclipse']
    }
  },
  {
    id: 4,
    title: 'CAD Viewer Integration with PLM Cloud',
    tech: 'C#, SQL, 4GL, JavaScript, Java',
    description: 'Integrated CAD viewers with PLM Cloud to enable file preview, markup, and collaborative review.',
    impact: 'Enabled seamless 2D/3D visualization and markup workflows across multiple production environments',
    details: 'Integrated Vertex CAD Viewer with Infor PLM Cloud to support 2D/3D file previews and markup capabilities. Collaborated with cross-domain teams and developed Proof of Concepts using front-end technologies.: Implemented integration with Oracle AutoVue Desktop Viewer, enabling file download, markup creation, and secure saving back to PLM via a custom button-based interface. :Delivered a unified visualization and review experience for both on-premise and cloud customers, improving design collaboration and review efficiency.',
    techStack: {
      languages: ['C#', 'JavaScript', 'Java', 'SQL', '4GL'],
      frameworks: [],
      apis: [],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'Oracle AutoVue', 'Vertex Viewer']
    }
  },
  {
    id: 5,
    title: 'PTC Creo - Infor PLM Cloud Integration',
    tech: 'C++',
    description: 'Developed Multiple new features and optimized existing Creo Add-In functionalities using Toolkit APIs.',
    impact: 'Ensured successful customer go-lives by delivering complex, mission-critical requirements under tight deadlines, while supporting multiple Creo versions and integrating diverse design, variant, and model data into PLM based on customer needs.',
    details: 'Implemented variant-aware save workflows to manage multiple design configurations synched with generic design. :Migrated integration APIs from Creo v8 to v9+ by refactoring core functionalities and adapting to new frameworks.:Developed several integration logics to connect assembly data, geometry information, and design variants with PLM systems, while analyzing Creo-specific behavior to optimize processing for improved performance and stability.',
    techStack: {
      languages: ['C++'],
      frameworks: [],
      apis: ['Creo Paramteric Toolkit'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  },
  {
    id: 6,
    title: 'Multi Language Mapping in CAD Integration',
    tech: 'C#,C++,SQL,4GL',
    description: 'Enabled one-click multi-language data mapping in CAD–PLM Integration.',
    impact: 'Eliminating manual language switching increased user efficiency; multiple customers use this feature on a regular basis in production environments.',
    details: 'Implemented multi-language mapping functionality that allows users to define mapping rules in multiple languages and save data across languages in single click.',
    techStack: {
      languages: ['C#', 'C++', 'SQL', '4GL'],
      frameworks: [],
      apis: ['Creo Paramteric Toolkit'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  },
  {
    id: 7,
    title: 'Automated Creo Workflow Processing',
    tech: 'C++,C#',
    description: 'Built automated Creo processing in CAD Utility for hands-free file handling and neutral file generation.',
    impact: 'Reduced manual effort and improved workflow reliability by enabling fully automated processing of Creo Designs.',
    details: 'Integrated Creo automation into an existing .NET CAD Utility to process workflow-driven files, perform mapping and neutral file generation, and manage sessions programmatically without user involvement.',
    techStack: {
      languages: ['C++', 'C#'],
      frameworks: [],
      apis: ['Creo Paramteric Toolkit'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  },
  {
    id: 8,
    title: 'Export-Import of Mapping Templates ',
    tech: 'SQL, 4GL',
    description: 'Built one-click export and import for mapping templates across environments.',
    impact: 'Simplified cross-tenant data migration by replacing complex procedures with a one-click transfer solution, helping customers quickly move mapping data between environments.',
    details: 'Developed export and import functionality in the mapping templates module, enabling users to transfer mapping rules of  multiple templates across environments using XML-based files.',
    techStack: {
      languages: ['SQL', '4GL'],
      frameworks: [],
      apis: ['Creo Paramteric Toolkit'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  }
];




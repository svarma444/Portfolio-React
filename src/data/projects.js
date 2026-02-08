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
    details: 'Optimized CAD–PLM integration workflows by enhancing multi-threaded Toolkit and server-side logic. : Designed and implemented JSON-based request handling to coordinate multiple interlinked database save operations. : Applied concurrency concepts such as multi-threading, synchronization, and request orchestration to ensure fault tolerance, high throughput, and reliable large-scale data processing in Infor PLM Cloud.',
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
    description: 'Developed new integration features and optimized existing PTC Creo add-in functionality using native APIs.',
    impact: 'Enabled multiple customers to efficiently centralize and manage their diverse Office files in the cloud.',
    details: 'Integrated Infor PLM Cloud with Microsoft applications by leveraging Microsoft APIs to enable seamless saving of Office files (Word, Excel, PowerPoint) from OneDrive to PLM Cloud. : Developed batch register functionality to efficiently upload and manage large volumes of files through Microsoft APIs.',
    techStack: {
      languages: ['C++', 'C#'],
      frameworks: ['.NET'],
      apis: ['Microsoft Graph API', 'OneDrive API'],
      platform: ['Infor PLM Cloud'],
      tools: ['Visual Studio', 'Git', 'REST']
    }
  }
];




export interface NavItem {
  label: string;
  href: string;
}

export interface AboutPillar {
  id: string;
  label: string;
  text: string;
  highlight: string;
  icon: 'origin' | 'operations' | 'compliance';
}

export interface MiningArea {
  id: string;
  name: string;
  status: string;
  statusType: 'active' | 'prospecting' | 'pending';
  description: string;
  highlights: string[];
}

export interface CompanyFact {
  label: string;
  value: string;
  copyable?: boolean;
  badgeList?: string[];
}

export const navigation: NavItem[] = [
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Áreas mineras', href: '#areas-mineras' },
  { label: 'Datos de la empresa', href: '#datos-empresa' },
  { label: 'Contacto', href: '#contacto' },
];

export const heroData = {
  eyebrow: 'EMPRESA MINERA S.R.L. · COCHABAMBA, BOLIVIA',
  title: 'Minería boliviana de wolframio, estaño y oro',
  description:
    'Empresa familiar constituida en 2016, con operaciones en la provincia Ayopaya y áreas mineras en los departamentos de Cochabamba y La Paz.',
  minerals: [
    { symbol: 'W', name: 'Wolframio', detail: 'Alta densidad y pureza' },
    { symbol: 'Sn', name: 'Estaño', detail: 'Vetas mineralizadas' },
    { symbol: 'Au', name: 'Oro', detail: 'Aprovechamiento responsable' },
  ],
};

export const aboutData = {
  title: 'Quiénes somos',
  pillars: [
    {
      id: 'origen',
      label: 'Origen e Identidad',
      highlight: 'Fundada en 2016 · Cochabamba',
      icon: 'origin',
      text: 'Empresa Minera "Silvadorita" S.R.L. es una empresa minera boliviana de origen familiar, constituida en la ciudad de Cochabamba el 22 de abril de 2016 como sociedad de responsabilidad limitada e inscrita en el Registro de Comercio desde el 12 de mayo de 2016.',
    },
    {
      id: 'operaciones',
      label: 'Cadena Productiva y Servicios',
      highlight: 'Ciclo Minero Integral',
      icon: 'operations',
      text: 'Nos dedicamos a la prospección, exploración, explotación, concentración, fundición, refinación, industrialización y comercialización de minerales. También prestamos servicios de explotación minera y de transporte pesado y liviano.',
    },
    {
      id: 'cumplimiento',
      label: 'Gestión Ambiental y Comunidad',
      highlight: 'AJAM · Ley N° 1333',
      icon: 'compliance',
      text: 'Trabajamos con derechos mineros adecuados ante la Autoridad Jurisdiccional Administrativa Minera (AJAM), con gestión ambiental conforme a la Ley N° 1333 y en relación cercana con las comunidades vecinas a nuestras operaciones.',
    },
  ] satisfies AboutPillar[],
};

export const miningAreasData = {
  title: 'Nuestras áreas mineras',
  subtitle:
    'Ubicadas en la zona del cerro Chicote Grande, en el límite entre los departamentos de Cochabamba y La Paz.',
  areas: [
    {
      id: 'la-poderosa',
      name: 'La Poderosa',
      status: 'En operación',
      statusType: 'active',
      description:
        'Área en explotación, que abarca los municipios de Independencia (provincia Ayopaya, Cochabamba) y Colquiri (La Paz).',
      highlights: [
        'Adecuación concluida ante la AJAM, con registro minero',
        'Licencia ambiental EMAP otorgada por la Gobernación de Cochabamba',
        'Proyecto de riel aérea para el transporte de mineral',
      ],
    },
    {
      id: 'mi-triunfo',
      name: 'Mi Triunfo',
      status: 'En prospección',
      statusType: 'prospecting',
      description:
        'Proyecto de wolframio y estaño en el municipio de Independencia, con seis vetas identificadas en la falda noreste del cerro Chicote Grande.',
      highlights: [
        'Adecuación ante la AJAM en etapa final',
        'Documento ambiental EMAP elaborado',
        'Proyecto de mina mecanizada y planta gravimétrica',
      ],
    },
    {
      id: 'san-esteban',
      name: 'San Esteban',
      status: 'En trámite',
      statusType: 'pending',
      description:
        'Área minera en proceso de adecuación ante la AJAM y de gestión de su documento ambiental.',
      highlights: [],
    },
  ] satisfies MiningArea[],
};

export const companyFactsData = {
  title: 'Datos de la empresa',
  facts: [
    {
      label: 'Razón social',
      value: 'Empresa Minera "Silvadorita" S.R.L.',
    },
    {
      label: 'Tipo de sociedad',
      value: 'Sociedad de Responsabilidad Limitada',
    },
    {
      label: 'Fecha de constitución',
      value: '22 de abril de 2016',
    },
    {
      label: 'NIT y matrícula de comercio',
      value: '313716027',
      copyable: true,
    },
    {
      label: 'Domicilio legal',
      value: 'Plaza 14 de Septiembre N° 328, zona Central, Cochabamba, Bolivia',
      copyable: true,
    },
    {
      label: 'Áreas mineras',
      value: 'La Poderosa, Mi Triunfo y San Esteban',
      badgeList: ['La Poderosa', 'Mi Triunfo', 'San Esteban'],
    },
    {
      label: 'Minerales',
      value: 'Wolframio, estaño y oro',
      badgeList: ['Wolframio', 'Estaño', 'Oro'],
    },
  ] satisfies CompanyFact[],
};

export const contactData = {
  companyName: 'SILVADORITA',
  companyType: 'Empresa Minera S.R.L.',
  address: 'Plaza 14 de Septiembre N° 328, Cochabamba, Bolivia',
  phone: '[TELÉFONO DE LA EMPRESA]',
  email: '[CORREO DE LA EMPRESA]',
};

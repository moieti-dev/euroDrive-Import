const translations = {
    es: {
        // Shared Nav & Footer
        tagline: "Tu Puerta a la Excelencia Europea",
        navInicio: "Inicio",
        navProceso: "El Proceso",
        navSolicitud: "Solicitud",
        footerPartner: "Tu partner de confianza para subir el nivel de tu garaje con importaciones de élite.",
        footerNav: "Navegación",
        footerContact: "Contacto Directo",
        footerLegal: "Legal",
        legalAviso: "Aviso Legal",
        legalPrivacidad: "Política de Privacidad",
        legalTerminos: "Términos de Servicio",
        legalRights: "© 2026 EuroDrive Import. Exclusividad y Profesionalidad.",
        
        // Success Screen
        successTitle: "¡Solicitud Enviada!",
        successDesc: "Hemos recibido tus datos correctamente. Uno de nuestros expertos se pondrá en contacto contigo en las próximas 24 horas para comenzar la búsqueda.",
        successBtn: "Volver al Inicio",
        
        // Legal Pages Titles
        legalAvisoTitle: "Aviso Legal",
        legalPrivacidadTitle: "Política de Privacidad",
        legalTerminosTitle: "Términos de Servicio",

        // Legal Content placeholders (Simplified for demo, user should provide real text)
        legalAvisoContent: `
            <h3>1. Datos Identificativos</h3>
            <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es EuroDrive Import, con domicilio a estos efectos en España, correo electrónico de contacto: eurodrive.import09@gmail.com.</p>
            <h3>2. Usuarios</h3>
            <p>El acceso y/o uso de este portal de EuroDrive Import atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
            <h3>3. Uso del Portal</h3>
            <p>www.eurodrive-import.com proporciona el acceso a multitud de informaciones, servicios, programas o datos en Internet pertenecientes a EuroDrive Import o a sus licenciantes a los que el USUARIO pueda tener acceso.</p>
        `,
        legalPrivacidadContent: `
            <h3>1. Protección de Datos</h3>
            <p>EuroDrive Import cumple con las directrices de la Ley Orgánica 15/1999 de 13 de diciembre de Protección de Datos de Carácter Personal, el Real Decreto 1720/2007 de 21 de diciembre por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica y demás normativa vigente en cada momento, y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.</p>
            <h3>2. Cookies</h3>
            <p>EuroDrive Import informa que tiene instaladas cookies en sus sistemas. Las cookies son pequeños archivos de texto que almacena el navegador en el disco duro de su ordenador. Cuando usted navega a través de la página web, el servidor de EuroDrive Import podrá reconocer la cookie y proporcionar información sobre su última visita.</p>
        `,
        legalTerminosContent: `
            <h3>1. Objeto</h3>
            <p>Las presentes Condiciones Generales de Uso regulan el acceso y la utilización del Sitio Web, incluyendo los contenidos y los servicios puestos a disposición de los Usuarios en y/o a través del Sitio Web.</p>
            <h3>2. Modificaciones</h3>
            <p>EuroDrive Import se reserva el derecho de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados.</p>
        `,

        // Home - Hero
        heroEyebrow: "Experiencia Premium",
        heroH1: "Tu coche soñado desde <span id='dynamicCountry' class='flag-text-germany'>Alemania</span>,<br>en tu puerta.",
        heroP: "Nos encargamos de todo: verificación exhaustiva, compra segura, transporte cerrado y matriculación nacional. Disfruta de la exclusividad sin preocupaciones.",
        btnComenzar: "Comenzar Importación",
        btnDescubrir: "Descubrir el Proceso",
        badge1: "✨ Asesor Experto",
        badge2: "🛡️ Garantía Oficial",
        badge3: "🏎️ Entrega VIP",

        // Home - Features
        featTitle: "¿Por qué el mercado <br><span id='dynamicMarket' class='flag-text-germany'>Alemán</span>?",
        feat1Title: "Stock Exclusivo",
        feat1Desc: "Acceso a unidades limitadas, configuraciones full-equip y ediciones especiales que no llegan a España.",
        feat2Title: "Máxima Rentabilidad",
        feat2Desc: "Ahorros significativos en vehículos de gamas altas y premium frente al mercado nacional.",
        feat3Title: "Transparencia Total",
        feat3Desc: "Historiales auditados, kilómetros certificados y mantenimientos en servicios oficiales rigurosos.",
        feat4Title: "Gestión Express",
        feat4Desc: "Del concesionario a tu garaje en tiempos récord con matriculación incluida.",

        // Home - Process
        procTitle: "Nuestra Metodología <span>Premium</span>",
        proc1Title: "Búsqueda Personalizada",
        proc1Desc: "Tú defines el modelo, presupuesto y extras. Nosotros rastreamos toda la red oficial alemana hasta encontrar la unidad perfecta.",
        proc2Title: "Verificación in situ",
        proc2Desc: "Nuestros expertos comprueban estado, historial de siniestralidad, pintura y mecánica antes de dar luz verde.",
        proc3Title: "Compra y Burocracia",
        proc3Desc: "Gestionamos la compra segura, factura sin IVA (si aplica) y la obtención de matrículas de tránsito y seguro.",
        proc4Title: "Transporte y Matriculación",
        proc4Desc: "Traslado a España, pago de impuestos y matriculación definitiva.",

        // Form page
        formH1: "Encuentra Tu Vehículo Ideal",
        formP: "Rellena los datos para que uno de nuestros expertos se ponga en contacto contigo en las próximas 24 horas y empiece la búsqueda de tu coche en Alemania.",
        formStep1: "1. Datos de Contacto",
        labelNombre: 'Nombre y Apellidos <span style="color:var(--primary)">*</span>',
        labelTel: 'Número de Móvil <span style="color:var(--primary)">*</span>',
        labelEmail: 'Correo Electrónico <span style="color:var(--primary)">*</span>',
        btnNext: "Siguiente Paso →",
        
        formStep2: "2. Datos del Vehículo",
        labelMarca: 'Marca <span style="color:var(--primary)">*</span>',
        labelModelo: 'Modelo <span style="color:var(--primary)">*</span>',
        labelAno: 'Año de matriculación <span style="color:var(--primary)">*</span>',
        labelKms: 'Kilometraje Max <span style="color:var(--primary)">*</span>',
        labelCombustible: 'Combustible <span style="color:var(--primary)">*</span>',
        labelTrans: 'Transmisión <span style="color:var(--primary)">*</span>',
        labelPresupuesto: 'Presupuesto <span style="color:var(--primary)">*</span>',
        labelExtras: 'Extras <span style="color:var(--primary)">*</span>',
        
        optSelect: "Selecciona una opción",
        optDiesel: "Diésel",
        optGas: "Gasolina",
        optHyb: "Híbrido",
        optElec: "Eléctrico",
        optMan: "Manual",
        optAuto: "Automático",
        
        btnSubmit: "Enviar Solicitud Exclusiva",
        btnBack: "← Volver",
        
        // Placeholders
        phNombre: "Ej: Juan Pérez",
        phMarca: "Ejemplo: Audi",
        phModelo: "Ejemplo: A5",
        phAno: "Ejemplo: 2015",
        phKms: "Ejemplo: 180.000KM",
        phPresupuesto: "Ejemplo: 15.000€",
        phExtras: "Ejemplo: Asientos de cuero, Techo solar, etc..."
    },
    en: {
        // Shared Nav & Footer
        tagline: "Your Gateway to European Excellence",
        navInicio: "Home",
        navProceso: "The Process",
        navSolicitud: "Application",
        footerPartner: "Your trusted partner to level up your garage with elite imports.",
        footerNav: "Navigation",
        footerContact: "Direct Contact",
        footerLegal: "Legal",
        legalAviso: "Legal Notice",
        legalPrivacidad: "Privacy Policy",
        legalTerminos: "Terms of Service",
        footerRights: "© 2026 EuroDrive Import. Exclusivity and Professionalism.",

        // Success Screen
        successTitle: "Request Sent!",
        successDesc: "We have received your details correctly. One of our experts will contact you within the next 24 hours to begin the search.",
        successBtn: "Back to Home",
        
        // Legal Pages Titles
        legalAvisoTitle: "Legal Notice",
        legalPrivacidadTitle: "Privacy Policy",
        legalTerminosTitle: "Terms of Service",

        // Legal Content placeholders
        legalAvisoContent: `
            <h3>1. Identifying Data</h3>
            <p>In compliance with the duty of information contained in article 10 of Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce, the following data is reflected below: the company owner of the web domain is EuroDrive Import, with address for these purposes in Spain, contact email: eurodrive.import09@gmail.com.</p>
            <h3>2. Users</h3>
            <p>The access and/or use of this EuroDrive Import portal attributes the condition of USER, who accepts, from said access and/or use, the General Conditions of Use reflected here.</p>
        `,
        legalPrivacidadContent: `
            <h3>1. Data Protection</h3>
            <p>EuroDrive Import complies with the guidelines of Organic Law 15/1999 of December 13 on the Protection of Personal Data, Royal Decree 1720/2007 of December 21, and other current regulations at all times, and ensures correct use and treatment of the user's personal data.</p>
        `,
        legalTerminosContent: `
            <h3>1. Object</h3>
            <p>These General Conditions of Use regulate the access and use of the Website, including the content and services made available to Users on and/or through the Website.</p>
        `,

        // Home - Hero
        heroEyebrow: "Premium Experience",
        heroH1: "Your dream car from <span id='dynamicCountry' class='flag-text-germany'>Germany</span>,<br>at your door.",
        heroP: "We handle everything: exhaustive verification, secure purchase, enclosed transport and national registration. Enjoy exclusivity without worries.",
        btnComenzar: "Start Import",
        btnDescubrir: "Discover the Process",
        badge1: "✨ Expert Advisor",
        badge2: "🛡️ Official Warranty",
        badge3: "🏎️ VIP Delivery",

        // Home - Features
        featTitle: "Why the <br><span id='dynamicMarket' class='flag-text-germany'>German</span> market?",
        feat1Title: "Exclusive Stock",
        feat1Desc: "Access to limited units, fully-equipped configurations, and special editions not available locally.",
        feat2Title: "Maximum Profitability",
        feat2Desc: "Significant savings on high-end and premium vehicles compared to the national market.",
        feat3Title: "Total Transparency",
        feat3Desc: "Audited histories, certified mileage, and rigorous official service maintenance.",
        feat4Title: "Express Management",
        feat4Desc: "From the dealership to your garage in record time with registration included.",

        // Home - Process
        procTitle: "Our <span>Premium</span> Methodology",
        proc1Title: "Personalized Search",
        proc1Desc: "You define the model, budget, and extras. We track the entire official German network to find the perfect unit.",
        proc2Title: "On-site Verification",
        proc2Desc: "Our experts check condition, accident history, paint, and mechanics before giving the green light.",
        proc3Title: "Purchase & Bureaucracy",
        proc3Desc: "We manage the secure purchase, VAT-free invoice (if applicable), and obtain transit plates and insurance.",
        proc4Title: "Transport & Registration",
        proc4Desc: "Transfer to Spain, tax payments, and final registration.",

        // Form page
        formH1: "Find Your Ideal Vehicle",
        formP: "Fill out the details so one of our experts can contact you within the next 24 hours to begin the search for your car in Germany.",
        formStep1: "1. Contact Details",
        labelNombre: 'Full Name <span style="color:var(--primary)">*</span>',
        labelTel: 'Mobile Number <span style="color:var(--primary)">*</span>',
        labelEmail: 'Email Address <span style="color:var(--primary)">*</span>',
        btnNext: "Next Step →",
        
        formStep2: "2. Vehicle Details",
        labelMarca: 'Brand <span style="color:var(--primary)">*</span>',
        labelModelo: 'Model <span style="color:var(--primary)">*</span>',
        labelAno: 'Registration Year <span style="color:var(--primary)">*</span>',
        labelKms: 'Max Mileage <span style="color:var(--primary)">*</span>',
        labelCombustible: 'Fuel Type <span style="color:var(--primary)">*</span>',
        labelTrans: 'Transmission <span style="color:var(--primary)">*</span>',
        labelPresupuesto: 'Budget <span style="color:var(--primary)">*</span>',
        labelExtras: 'Extras <span style="color:var(--primary)">*</span>',
        
        optSelect: "Select an option",
        optDiesel: "Diesel",
        optGas: "Petrol",
        optHyb: "Hybrid",
        optElec: "Electric",
        optMan: "Manual",
        optAuto: "Automatic",
        
        btnSubmit: "Send Exclusive Request",
        btnBack: "← Go Back",
        
        // Placeholders
        phNombre: "Ex: John Doe",
        phMarca: "Example: Audi",
        phModelo: "Example: A5",
        phAno: "Example: 2015",
        phKms: "Example: 180.000KM",
        phPresupuesto: "Example: 15.000€",
        phExtras: "Example: Leather seats, Sunroof, etc..."
    },
    fr: {
        tagline: "Votre Porte vers l'Excellence Européenne",
        navInicio: "Accueil",
        navProceso: "Le Processus",
        navSolicitud: "Demande",
        footerPartner: "Votre partenaire de confiance pour élever le niveau de votre garage avec des importations d'élite.",
        footerNav: "Navigation",
        footerContact: "Contact Direct",
        footerLegal: "Légal",
        legalAviso: "Mentions Légales",
        legalPrivacidad: "Politique de Confidentialité",
        legalTerminos: "Conditions d'Utilisation",
        footerRights: "© 2026 EuroDrive Import. Exclusivité et Professionnalisme.",

        // Success Screen
        successTitle: "Demande Envoyée !",
        successDesc: "Nous avons bien reçu vos coordonnées. L'un de nos experts vous contactera dans les 24 heures pour commencer la recherche.",
        successBtn: "Retour à l'Accueil",
        
        // Legal Pages Titles
        legalAvisoTitle: "Mentions Légales",
        legalPrivacidadTitle: "Politique de Confidentialité",
        legalTerminosTitle: "Conditions d'Utilisation",

        // Legal Content placeholders
        legalAvisoContent: `
            <h3>1. Données d'Identification</h3>
            <p>Conformément au devoir d'information contenu dans l'article 10 de la loi 34/2002 du 11 juillet sur les services de la société de l'information et du commerce électronique, les données suivantes sont présentées : la société propriétaire du domaine web est EuroDrive Import, domiciliée à cet effet en Espagne, email de contact : eurodrive.import09@gmail.com.</p>
        `,
        legalPrivacidadContent: `
            <h3>1. Protection des Données</h3>
            <p>EuroDrive Import respecte les directives de la loi organique 15/1999 du 13 décembre sur la protection des données à caractère personnel, le décret royal 1720/2007 du 21 décembre et les autres réglementations en vigueur à tout moment.</p>
        `,
        legalTerminosContent: `
            <h3>1. Objet</h3>
            <p>Les présentes conditions générales d'utilisation régissent l'accès et l'utilisation du site Web, y compris le contenu et les services mis à la disposition des utilisateurs sur et/ou via le site Web.</p>
        `,

        heroEyebrow: "Expérience Premium",
        heroH1: "La voiture de vos rêves de <span id='dynamicCountry' class='flag-text-germany'>l'Allemagne</span>,<br>à votre porte.",
        heroP: "Nous nous occupons de tout : vérification exhaustive, achat sécurisé, transport fermé et immatriculation nationale. Profitez de l'exclusivité sans soucis.",
        btnComenzar: "Commencer l'Importation",
        btnDescubrir: "Découvrir le Processus",
        badge1: "✨ Conseiller Expert",
        badge2: "🛡️ Garantie Officielle",
        badge3: "🏎️ Livraison VIP",
        featTitle: "Pourquoi le marché <br><span id='dynamicMarket' class='flag-text-germany'>Allemand</span> ?",
        feat1Title: "Stock Exclusif",
        feat1Desc: "Accès à des unités limitées, des configurations toutes options et des éditions spéciales introuvables en Espagne.",
        feat2Title: "Rentabilité Maximale",
        feat2Desc: "Des économies importantes sur les véhicules haut de gamme et premium par rapport au marché national.",
        feat3Title: "Transparence Totale",
        feat3Desc: "Historiques audités, kilométrages certifiés et entretiens rigoureux dans les services officiels.",
        feat4Title: "Gestion Express",
        feat4Desc: "Du concessionnaire à votre garage en un temps record avec immatriculation incluse.",
        procTitle: "Notre Méthodologie <span>Premium</span>",
        proc1Title: "Recherche Personnalisée",
        proc1Desc: "Vous définissez le modèle, le budget et les options. Nous explorons l'ensemble du réseau officiel allemand pour trouver l'unité parfaite.",
        proc2Title: "Vérification sur place",
        proc2Desc: "Nos experts vérifient l'état, l'historique des accidents, la peinture et la mécanique avant de donner le feu vert.",
        proc3Title: "Achat & Bureaucratie",
        proc3Desc: "Nous gérons l'achat sécurisé, la facture hors taxes (si applicable) et obtenons les plaques de transit et l'assurance.",
        proc4Title: "Transport & Immatriculation",
        proc4Desc: "Transfert vers l'Espagne, paiements des taxes et immatriculation définitive.",
        formH1: "Trouvez Votre Véhicule Idéal",
        formP: "Remplissez les détails pour qu'un de nos experts vous contacte dans les 24 heures afin de commencer la recherche de votre voiture en Allemagne.",
        formStep1: "1. Coordonnées",
        labelNombre: 'Nom et Prénoms <span style="color:var(--primary)">*</span>',
        labelTel: 'Numéro de Mobile <span style="color:var(--primary)">*</span>',
        labelEmail: 'Adresse Email <span style="color:var(--primary)">*</span>',
        btnNext: "Étape Suivante →",
        formStep2: "2. Détails du Véhicule",
        labelMarca: 'Marque <span style="color:var(--primary)">*</span>',
        labelModelo: 'Modèle <span style="color:var(--primary)">*</span>',
        labelAno: 'Année d\'immatriculation <span style="color:var(--primary)">*</span>',
        labelKms: 'Kilométrage Max <span style="color:var(--primary)">*</span>',
        labelCombustible: 'Carburant <span style="color:var(--primary)">*</span>',
        labelTrans: 'Transmission <span style="color:var(--primary)">*</span>',
        labelPresupuesto: 'Budget <span style="color:var(--primary)">*</span>',
        labelExtras: 'Options <span style="color:var(--primary)">*</span>',
        optSelect: "Sélectionnez une option",
        optDiesel: "Diesel",
        optGas: "Essence",
        optHyb: "Hybride",
        optElec: "Électrique",
        optMan: "Manuelle",
        optAuto: "Automatique",
        btnSubmit: "Envoyer la Demande Exclusive",
        btnBack: "← Retour",
        phNombre: "Ex: Jean Dupont",
        phMarca: "Exemple: Audi",
        phModelo: "Exemple: A5",
        phAno: "Exemple: 2015",
        phKms: "Exemple: 180.000KM",
        phPresupuesto: "Exemple: 15.000€",
        phExtras: "Exemple: Sièges en cuir, Toit ouvrant, etc..."
    },
    de: {
        tagline: "Ihr Tor zu Europäischer Exzellenz",
        navInicio: "Startseite",
        navProceso: "Der Prozess",
        navSolicitud: "Anfrage",
        footerPartner: "Ihr treuer Partner, um Ihre Garage mit Elite-Importen aufzuwerten.",
        footerNav: "Navigation",
        footerContact: "Direkter Kontakt",
        footerLegal: "Rechtliches",
        legalAviso: "Impressum",
        legalPrivacidad: "Datenschutzrichtlinie",
        legalTerminos: "Nutzungsbedingungen",
        footerRights: "© 2026 EuroDrive Import. Exklusivität und Professionalität.",

        // Success Screen
        successTitle: "Anfrage Gesendet!",
        successDesc: "Wir haben Ihre Daten korrekt erhalten. Einer unserer Experten wird Sie innerhalb der nächsten 24 Stunden kontaktieren, um mit der Suche zu beginnen.",
        successBtn: "Zurück zur Startseite",
        
        // Legal Pages Titles
        legalAvisoTitle: "Impressum",
        legalPrivacidadTitle: "Datenschutzrichtlinie",
        legalTerminosTitle: "Nutzungsbedingungen",

        // Legal Content placeholders
        legalAvisoContent: `
            <h3>1. Identifikationsdaten</h3>
            <p>In Übereinstimmung mit der Informationspflicht gemäß Artikel 10 des Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und des elektronischen Geschäftsverkehrs werden im Folgenden die folgenden Daten aufgeführt: Der Eigentümer der Webdomain ist EuroDrive Import, mit Sitz in Spanien, Kontakt-E-Mail: eurodrive.import09@gmail.com.</p>
        `,
        legalPrivacidadContent: `
            <h3>1. Datenschutz</h3>
            <p>EuroDrive Import hält sich an die Richtlinien des Organgesetzes 15/1999 vom 13. Dezember über den Schutz personenbezogener Daten, des Königlichen Dekrets 1720/2007 vom 21. Dezember und anderer jeweils geltender Vorschriften.</p>
        `,
        legalTerminosContent: `
            <h3>1. Gegenstand</h3>
            <p>Diese Allgemeinen Nutzungsbedingungen regeln den Zugang und die Nutzung der Website, einschließlich der Inhalte und Dienste, die den Nutzern auf und/oder über die Website zur Verfügung gestellt werden.</p>
        `,

        heroEyebrow: "Premium Erlebnis",
        heroH1: "Ihr Traumauto aus <span id='dynamicCountry' class='flag-text-germany'>Deutschland</span>,<br>direkt vor Ihrer Tür.",
        heroP: "Wir kümmern uns um alles: gründliche Überprüfung, sicherer Kauf, geschlossener Transport und nationale Zulassung. Genießen Sie Exklusivität ohne Sorgen.",
        btnComenzar: "Import Starten",
        btnDescubrir: "Prozess Entdecken",
        badge1: "✨ Expertenberater",
        badge2: "🛡️ Offizielle Garantie",
        badge3: "🏎️ VIP-Lieferung",
        featTitle: "Warum der <br><span id='dynamicMarket' class='flag-text-germany'>Deutsche</span> Markt?",
        feat1Title: "Exklusiver Bestand",
        feat1Desc: "Zugang zu limitierten Einheiten, voll ausgestatteten Konfigurationen und Sondereditionen, die in Spanien nicht erhältlich sind.",
        feat2Title: "Maximale Rentabilität",
        feat2Desc: "Erhebliche Einsparungen bei Oberklasse- und Premiumfahrzeugen im Vergleich zum nationalen Markt.",
        feat3Title: "Totale Transparenz",
        feat3Desc: "Geprüfte Historien, zertifizierte Kilometerstände und strenge Wartung bei offiziellen Diensten.",
        feat4Title: "Express-Management",
        feat4Desc: "Vom Autohaus in Rekordzeit in Ihre Garage inklusive Zulassung.",
        procTitle: "Unsere <span>Premium</span> Methodik",
        proc1Title: "Personalisierte Suche",
        proc1Desc: "Sie definieren Modell, Budget und Extras. Wir durchsuchen das gesamte offizielle deutsche Netzwerk nach der perfekten Einheit.",
        proc2Title: "Vor-Ort-Überprüfung",
        proc2Desc: "Unsere Experten prüfen Zustand, Unfallhistorie, Lack und Mechanik, bevor sie grünes Licht geben.",
        proc3Title: "Kauf & Bürokratie",
        proc3Desc: "Wir verwalten den sicheren Kauf, die mehrwertsteuerfreie Rechnung (falls zutreffend) und besorgen Überführungskennzeichen und Versicherung.",
        proc4Title: "Transport & Zulassung",
        proc4Desc: "Transfer nach Spanien, Steuerzahlungen und endgültige Zulassung.",
        formH1: "Finden Sie Ihr Ideales Fahrzeug",
        formP: "Füllen Sie die Details aus, damit einer unserer Experten Sie innerhalb der nächsten 24 Stunden kontaktieren kann, um die Suche nach Ihrem Auto in Deutschland zu beginnen.",
        formStep1: "1. Kontaktdaten",
        labelNombre: 'Vollständiger Name <span style="color:var(--primary)">*</span>',
        labelTel: 'Handynummer <span style="color:var(--primary)">*</span>',
        labelEmail: 'E-Mail-Adresse <span style="color:var(--primary)">*</span>',
        btnNext: "Nächster Schritt →",
        formStep2: "2. Fahrzeugdetails",
        labelMarca: 'Marke <span style="color:var(--primary)">*</span>',
        labelModelo: 'Modell <span style="color:var(--primary)">*</span>',
        labelAno: 'Zulassungsjahr <span style="color:var(--primary)">*</span>',
        labelKms: 'Maximaler Kilometerstand <span style="color:var(--primary)">*</span>',
        labelCombustible: 'Kraftstoff <span style="color:var(--primary)">*</span>',
        labelTrans: 'Getriebe <span style="color:var(--primary)">*</span>',
        labelPresupuesto: 'Budget <span style="color:var(--primary)">*</span>',
        labelExtras: 'Extras <span style="color:var(--primary)">*</span>',
        optSelect: "Bitte wählen",
        optDiesel: "Diesel",
        optGas: "Benzin",
        optHyb: "Hybrid",
        optElec: "Elektrisch",
        optMan: "Manuell",
        optAuto: "Automatik",
        btnSubmit: "Exklusive Anfrage Senden",
        btnBack: "← Zurück",
        phNombre: "Bsp: Max Mustermann",
        phMarca: "Beispiel: Audi",
        phModelo: "Beispiel: A5",
        phAno: "Beispiel: 2015",
        phKms: "Beispiel: 180.000KM",
        phPresupuesto: "Beispiel: 15.000€",
        phExtras: "Beispiel: Ledersitze, Schiebedach, etc..."
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }

    // Header scroll background
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Theme Toggle
    let savedTheme = localStorage.getItem('userTheme');
    if (!savedTheme) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = systemPrefersDark ? 'dark' : 'light'; 
    }
    document.body.setAttribute('data-theme', savedTheme);

    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
        themeBtn.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', next);
            localStorage.setItem('userTheme', next);
            themeBtn.innerText = next === 'dark' ? '☀️' : '🌙';
        });
    }

    // i18n Translation Logic
    function applyLanguage(lang) {
        localStorage.setItem('userLang', lang);
        const dict = translations[lang];
        if (!dict) return;

        // Animate elements slightly on translation
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.innerHTML = dict[key];
                    el.style.transition = 'opacity 0.3s ease';
                    el.style.opacity = '1';
                }, 150);
            }
        });

        // Translate Placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-ph]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });
    }

    const savedLang = localStorage.getItem('userLang') || 'es';
    
    // Custom Lang Selector logic
    const langWrapper = document.getElementById('langSelectorWrapper');
    const langOptions = document.getElementById('langOptions');
    const currentFlag = document.getElementById('currentFlag');
    
    if (langWrapper && langOptions && currentFlag) {
        // Init Flag
        const initItem = langOptions.querySelector(`li[data-value="${savedLang}"]`);
        if (initItem) {
            currentFlag.src = initItem.querySelector('img').src;
        }

        langWrapper.addEventListener('click', (e) => {
            langWrapper.classList.toggle('active');
        });

        langOptions.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = item.getAttribute('data-value');
                const src = item.querySelector('img').src;
                currentFlag.src = src;
                langWrapper.classList.remove('active');
                applyLanguage(lang);
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!langWrapper.contains(e.target)) {
                langWrapper.classList.remove('active');
            }
        });
    }
    
    // Dynamic Country Text Rotation Logic
    const dynamicCountries = {
        es: ["Alemania", "Bélgica", "Holanda"],
        en: ["Germany", "Belgium", "Holland"],
        fr: ["l'Allemagne", "la Belgique", "la Hollande"],
        de: ["Deutschland", "Belgien", "Holland"]
    };
    const dynamicMarkets = {
        es: ["Alemán", "Belga", "Holandés"],
        en: ["German", "Belgian", "Dutch"],
        fr: ["Allemand", "Belge", "Néerlandais"],
        de: ["Deutsche", "Belgische", "Holländische"]
    };
    const countryClasses = ["flag-text-germany", "flag-text-belgium", "flag-text-holland"];
    let currentCountryIdx = 0;
    
    setInterval(() => {
        const spanCountry = document.getElementById('dynamicCountry');
        const spanMarket = document.getElementById('dynamicMarket');
        
        if (spanCountry || spanMarket) {
            currentCountryIdx = (currentCountryIdx + 1) % 3;
            const currentLang = localStorage.getItem('userLang') || 'es';
            
            if (spanCountry) {
                spanCountry.classList.add('text-changing');
                setTimeout(() => {
                    spanCountry.innerText = dynamicCountries[currentLang][currentCountryIdx];
                    spanCountry.className = countryClasses[currentCountryIdx];
                    spanCountry.classList.remove('text-changing');
                }, 400);
            }

            if (spanMarket) {
                spanMarket.classList.add('text-changing');
                setTimeout(() => {
                    spanMarket.innerText = dynamicMarkets[currentLang][currentCountryIdx];
                    spanMarket.className = countryClasses[currentCountryIdx];
                    spanMarket.classList.remove('text-changing');
                }, 400);
            }
        }
    }, 1800);
    
    // Apply lang immediately on load without visual jump
    setTimeout(() => {
        applyLanguage(savedLang);
    }, 0);

    // Multi-step Form Logic
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    if (step1 && step2 && btnNext && btnPrev) {
        const form = document.getElementById('multi-step-form');
        const successScreen = document.getElementById('success-screen');
        const formIntro = document.querySelector('.form-panel > p');
        const formTitle = document.querySelector('.form-panel > h1');

        form.addEventListener('submit', async (e) => {
            e.stopPropagation();
            e.preventDefault();

            const btnSubmit = document.getElementById('btn-submit');
            const originalText = btnSubmit.innerText;
            btnSubmit.disabled = true;
            btnSubmit.innerText = "...";

            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Hide form and show success screen
                    form.style.opacity = '0';
                    if(formIntro) formIntro.style.opacity = '0';
                    if(formTitle) formTitle.style.opacity = '0';
                    
                    setTimeout(() => {
                        form.style.display = 'none';
                        if(formIntro) formIntro.style.display = 'none';
                        if(formTitle) formTitle.style.display = 'none';
                        
                        successScreen.style.display = 'block';
                        successScreen.style.opacity = '0';
                        setTimeout(() => {
                            successScreen.style.transition = 'opacity 0.6s ease';
                            successScreen.style.opacity = '1';
                        }, 50);
                    }, 400);
                } else {
                    alert("Oops! Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.");
                    btnSubmit.disabled = false;
                    btnSubmit.innerText = originalText;
                }
            } catch (error) {
                alert("Oops! Hubo un problema de conexión. Por favor, inténtalo de nuevo.");
                btnSubmit.disabled = false;
                btnSubmit.innerText = originalText;
            }
        });

        btnNext.addEventListener('click', () => {
            const inputs = step1.querySelectorAll('input, select, textarea');
            let allValid = true;
            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    allValid = false;
                }
            });

            if (allValid) {
                step1.style.opacity = '0';
                setTimeout(() => {
                    step1.style.display = 'none';
                    step2.style.display = 'block';
                    step2.style.opacity = '0';
                    setTimeout(() => {
                        step2.style.transition = 'opacity 0.4s ease';
                        step2.style.opacity = '1';
                    }, 50);
                }, 300);
            }
        });

        btnPrev.addEventListener('click', () => {
            step2.style.opacity = '0';
            setTimeout(() => {
                step2.style.display = 'none';
                step1.style.display = 'block';
                step1.style.opacity = '0';
                setTimeout(() => {
                    step1.style.transition = 'opacity 0.4s ease';
                    step1.style.opacity = '1';
                }, 50);
            }, 300);
        });
    }

    // Custom Reel Play/Pause functionality
    const heroReel = document.getElementById('heroReel');
    const reelContainer = document.querySelector('.custom-reel-player');
    
    if (heroReel && reelContainer) {
        reelContainer.addEventListener('click', () => {
            if (heroReel.paused) {
                // Remove muted lock so audio plays with video
                heroReel.muted = false; 
                heroReel.play().then(() => {
                    const icon = reelContainer.querySelector('.pulse-play');
                    if(icon) icon.innerText = '⏸';
                    const text = reelContainer.querySelector('span:last-child');
                    if(text) text.innerText = 'Toca para pausar';
                }).catch(err => console.error("Playback failed", err));
            } else {
                heroReel.pause();
                const icon = reelContainer.querySelector('.pulse-play');
                if(icon) icon.innerText = '▶';
                const text = reelContainer.querySelector('span:last-child');
                if(text) text.innerText = 'Toca para reproducir';
            }
        });
    }

});
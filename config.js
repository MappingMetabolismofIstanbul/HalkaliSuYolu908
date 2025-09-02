var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Halkalı Suyolu / Halkalı Waterway',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.835, 41.128],
                zoom:10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/XZRLtZfk/MEF-AAP-027-BAP-2025-08-09-13-40-02.png',
            description: '',
            location: {
                center: [28.856,41.119],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.874, 41.115],
                zoom: 14,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/bg09mwyQ/MEF-AAP-027-BAP-2025-07-15-13-04-54.png',
            description: 'Ali Paşa kemeri ve Kumrulu kemer, Halkalı Suyolları’na bağlı kemerlerdir.',
            location: {
                center: [28.877,41.090],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Jw0kFbZF/MEF-AAP-027-BAP-2025-08-08-22-20-48.png',
            description: '',
            location: {
                center: [28.892,41.078],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'twenty-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hxWJ5MxD/MEF-AAP-027-BAP-2025-08-08-22-22-15.png',
            description: '',
            location: {
                center: [28.902,41.065],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Pz3wCxWz/MEF-AAP-027-BAP-2025-07-17-13-37-30.png',
            description: '',
            location: {
                center: [28.888,41.057],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'eight-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {  
                center: [28.903, 41.051],               
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'nine-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '' ,
            location: {
                center: [28.915, 41.041],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'ten-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '' ,
            description: '' ,
            location: {
                center: [28.918,41.037],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'fourteen-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: '',
            description: '' ,
            location: {
                center: [28.932,41.028],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/jPM7vKXd/MEF-AAP-027-BAP-2025-07-17-13-39-33.png',
            description: 'Şehzade Cami avlusundaki su terazisi ve Topkapı Sarayı’nın dış avlusunda bulunan su terazisi , Halkalı Suyolları’na bağlıdır.' ,
            location: {
                center: [28.957,41.014],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             }, 
             {
            id: 'twelve-chapter',
            alignment: 'right',
            hidden: false,
            title: '', 
            image: 'https://i.ibb.co/0pVFx9Tv/MEF-AAP-027-BAP-2025-07-15-13-23-24.png',                                           
            description: '' , 
            location: {
                center: [28.983,41.011],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
              {
            id: 'fifteen-chapter',
            alignment: 'centered',
            hidden: false,
            title: '', 
            image: 'https://i.ibb.co/KcWDwszV/MEF-AAP-027-BAP-2025-08-08-20-23-41.png',
            description: '' , 
            location: {
                center: [28.983,41.011],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
             {
            id: 'thirteen-chapter',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/LztMBJmT/MEF-AAP-027-BAP-2025-08-09-21-29-41.png',                          
            description: '' ,
            location: {
                center: [28.983,41.011],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             }
    ]
};

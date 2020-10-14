const GetExperienceContent = (svgtext)=>{
    switch(svgtext){
        case 'ABB2' :{
            return {
                name:'ABB AIC(2018 November - Present), India/Sweden',
                duration:'2018-Present',
                role :'Senior software engineer',
                rnrDesktop:[
                    'Agile Method of delivering features',
                    'Develop ELK stack components',
                    'Mentor new developers about the product'],
                rnrMobile :['roles 1','roles 2','roles 3','roles 4']
            } 
        }
        
        case 'ABB' :{
            return {
                name:'ABB GISL(2014 Dec - 2018 July), India/Sweden',
                duration:'2014-2018',
                role :'Senior software engineer',
                rnrDesktop:[
                    'Design and develop UI dashboards to show Live and Historical data retreived from controllers.',
                    'Developed Historical data components in compliant with the OPC HDA specification.',
                    'Use C++ and ATL COM technology to develop re-usable components.',
                    'Interact with customers and lead L4 support.',
                    'Debug applications using Windbg,DebugDiag and resolve memory and performace issues.'],
                rnrMobile :['roles 1','roles 2','roles 3','roles 4']
            } 
        }
        case 'Integra' :{
            return {
                name:'Integra Micro Software Services (2010 June - 2014 Nov), India',
                duration:'2010 June - 2014 Nov',
                role :'software engineer',
                rnrDesktop:['Design and develop relevant data search dashboards.',
                            'Incorporate search functionality using Elastic Search.',
                            'Developed DLLs used in SCADA OR DCS screens.'],
                rnrMobile :['roles 1','roles 2','roles 3','roles 4']
            } 
        }
        case 'Northgate' :{
            return {
                name:'Northgate Technologies Pvt Ltd (2008 March - 2010 May), India',
                duration:'2008 March - 2010 May',
                role :'software engineer',
                rnrDesktop:['Developed C++ Libraries.',
                            'Developed GUI applications using MFC library.',
                            'Developed Multi Threaded and Socket programming code.',
                            'Written tools to perform automated testing.'],
                rnrMobile :['roles 1','roles 2','roles 3','roles 4']
            } 
        }

        default : {
            return {
                name:'Freelancer',
                duration:'2018-Present',
                role :'software engineer',
                rnrDesktop:['roles 1','roles 2','roles 3','roles 4'],
                rnrMobile :['roles 1','roles 2','roles 3','roles 4']
            } 
        }

    }
}

 export default GetExperienceContent;
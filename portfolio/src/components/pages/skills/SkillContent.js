const GetSkillContent = (svgtext)=>{
    switch(svgtext){
        case 'sass' :{
            return ['SCSS Module Design','Nesting and Inheritance','SCSS Mixins'] 
        }
        case 'typescript' :{
            return ['Generic Types','Interfaces and Classes','Decorators and Modules', 'Working with third party libraries']
        }
        case 'bash' :{
            return ['Awk , Grep, Sed Utilities','File Ops, and Substitution commands','Bash script debugging']
        }
        case 'cloud' :{
            return ['AWS' , 'Google Cloud Platform','Route53','Compute Engine & Networking']
        }
        case 'docker' :{
            return ['Docker Containers and Images','Data Volumes' , 'Networking','Building Docker images']
        } 
        case 'github' :{
            return ['Repository hosting','Git-bash command line usage','Settting up GIT and Deployment']
        }
        case 'webpack' :{
            return ['Webpack Dev Server','Server-side rendering','Loaders and plugins', 'Stateful reloading','Optimization for production']
        }
        case 'responsivedesign' :{
            return ['Responsive design with SCSS Mixins','Responsive Images','Media Queries']
        }  
        case 'cssgrid' :{
            return ['1D - FLEX BOX layout','2D CSS Grid layout','Auto alignment using Viewport Width ']
        }
        case 'nginx' :{
            return ['Reverse proxy setting','Configuring nginx as a Web Server' , 'nginx + Docker']
        }
        case 'es6' :{
            return ['Arrow Functions','Array and object destructering','Promises']  
        }
        case 'nodejs' :{
            return ['Express','Authentication and Authorization with security','Payments Email and Fileuploads']
        }         
        case 'mongodb' :{
            return ['MongoDB with Mongoose','Mongo DB Atlas','MongoDB Data Modelling']
        }  
        default : {
            return ['ReactJS','NodeJS','CSS3']
        }

    }
}

 export {GetSkillContent}
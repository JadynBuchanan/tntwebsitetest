import bijliIcon from 'Icons/project-icon-bijli.png';
import wakencyIcon from 'Icons/project-icon-wakency.png';
import nykaaIcon from 'Icons/project-icon-nykaa.png';
import pulseIcon from 'Icons/project-icon-pulse.png';
import lighthouseIcon from 'Icons/project-icon-lighthouse.png';
import benefactoryIcon from 'Icons/project-icon-benefactory.png';
import measureIcon from 'Icons/project-icon-measure.png';
import vcMusicPlayerIcon from 'Icons/project-icon-vc-music-player.png';
import placerIcon from 'Icons/prodname.png';

export const projectsListValue = {
  offstage: {
    name: 'Offstage',
    location: "Remote",
    dates: 'Spring 2021',
    icon: placerIcon,
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: '"Quote Placement"'
      },
      {
        type: 'points',
        highlight: 'green',
        title: 'The intention for bijli was to have a cross-platform product working on Web, Desktop, Android, iOS, Slack platforms having these core features :',
        value: [
          'Check-in Mechanism',
          'To-Do management',
          'Notification & Updates',
          'Feedback Engine',
          'Reservation System',
          'Real-Time Insights'
        ]
      },
      {
        type: 'text',
        highlight: 'green',
        value: '"Quote Placement"'
      },
      {
        type: 'header',
        value: 'My Contribution :',        
      },
      {
        type: 'text',
        value: 'Description text',
      },
      {
        type: 'points',
        title: 'These are some feature complexity faced and technology used :',
        value: [
          'Electron and Web build process with webpack',
          "A custom made Compose flow (Drafting messages, tagging, file attachments, etc)",
          'Pusher implementation for real time data updates',
          'Css in js implementation with aphrodite',
          'Worked with string replace to add functionality to a part of a string',
          'Redux-api-middleware',
          'React-Router-v4',
          'React-redux-form',
          'Aphrodite',
          'Redux-api-middleware',
          'Material-UI',
          'Firebase',
          'Redux',
          'React-Router',
          'Redux-Form',
          'Css Modules'
        ]
      }
    ]
  },
  
  nexttonormal: {
    name: 'Next To Normal',
    location: "THE SOHO PLAYHOUSE",
    icon: placerIcon,
    dates: 'OCTOBER 23 - NOVEMBER 4, 2018',
    link: {
      type: 'visit',
      value: 'https://www.wakency.com/'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote Placemnt'
      },
      {
        type: 'header',
        value: 'About :',        
      },
      {
        type: 'text',
        value: 'Description '
      },
      {
        type: 'points',
        value: [
          'Music Lyrics:',
          'Directed:',
          'Production:',
          'Presented: ',
          'Running Time'
         
        ]
      }
    ]
  },
  legallyblonde: {
    name: 'Legally Blonde',
    location: 'NYU Skirball',
    icon: placerIcon,
    dates: "NOVEMBER 1 - NOVEMBER 3, 2019",
    link: {
      type: 'visit',
      value: 'https://www.nykaa.com/'
    },
    description: [
      {
        type: 'quote',
        highlight: 'green',
        value: "SOMEHOW, TISCH NEW THEATRE REINVENTS ELLE WOODS IN 'LEGALLY BLONDE' ",
        author: "WASHINGTON SQUARE NEWS"
      },
      {
        type: 'header',
        value: 'About',        
      },
      {
        type: 'text',
        value: '<i>Legally Blonde: The Musical</i> is the award-winning production following the transformation of Elle Woods from sorority president to Harvard lawyer: tackling stereotypes, scandals, and sexism along the way. At Harvard, she struggles with peers, professors, and her newly-engaged ex, but with a newfound purpose and a pink-dominant wardrobe, Ms. Woods proves that being true to yourself never goes out of style.'
      },
      {
        type: 'points',
        value: [
          'Book by <b>Terrence McNally</b>; Music by <b>Marc Shaiman</b>; Lyrics by <b>Scott Wittman</b> and <b>Marc Shaiman</b>; Arrangements by <b>Marc Shaiman</b>; Orchestrations by <b>Marc Shaiman</b> and <b>Larry Blank</b>. <br><br>',
          'Directed and choreographed by <b>Philip Colgan</b>; music directed by <b>Curtis Reynolds</b>; scenic design by <b>Kyle Hill</b>; costume design by <b>Liz McGlone</b>; lighting design by <b>Kelley Shih</b>; sound design by <b>Adrienne Bixler</b>; hair and make-up design by <b>Jahise LeBouef</b>.<br><br>',
          'Production stage manager, <b>Jason Thinger</b>; production manager, <b>Christopher Pritchard</b>; technical supervisor, <b>Cherrish Curry</b>; associate producer, <b>Meg Whitehurst</b>; assistant producer, <b>Daniel Unitas</b>; associate director and choreographer, <b>Marc Anthony Ferre</b>.<br><br>',
          'Presented by <b>Jason Arnold</b> in association with <b>Tisch New Theatre</b> through special arrangement with <b>Music Theatre International</b>.',
        
        ]
      },
      {
        type:"header",
        value: "Program"
      },
      {
        type:"text",
        value: "<b>Running time</b>: 2 hours, 30 minutes."
      },

      {
        type:"bolded",
        value: "WITH: Jarrad Biron Green, Dante Jeanfelix, Damian Quinn, Kylie Cipola, Ashley Coia, Mallory Minerson, Emilio Madrid-Kuser, Bernardo Cabrera, Megan Callahan, Drew Carr, Cori Cook, Haley Callahan Fish, Taylor Johnson, Yvette Lu, KP Mendoza, David Merino, Whitney Mulhern, Amanda Pinto, AnnMarie Powers, Andy Richardson, Ian Shain, Zach Williams, Josh Zacher"
      }
    ]
  },
  onward: {
    name: 'Onward',
    location: "NYU EISNER & LUBIN AUDITORIUM",
    icon: placerIcon,
    dates: 'APRIL 15, 2018',
    link: {
      type: 'visit',
      value:  'https://www.youtube.com/watch?v=wOsy7b2Q-J4'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote placement'
      },
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote placement'
      },
      {
        type: 'header',
        value: 'About :',        
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'points',
        value: [
          'Directed',
          'Production:',
          'Music Lyrics',
          'Running Time:',
        
        ]
      },
    ]
  },
  littleshophorrors: {
    name: 'Little Shop of Horrors',
    location: "THE SOHO PLAYHOUSE",
    icon: placerIcon,
    dates: 'OCTOBER 31 - NOVEMBER 5, 2017',
    link: {
      type: 'download',
      value: 'https://play.google.com/store/apps/details?id=com.tailoredtech.lighthouse'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote Placemnt'
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'header',
        value: 'About :',        
      },
      {
        type: 'text',
        value: 'Desription'
      },
      {
        type: 'points',
        value: [
          'Directed:',
          'Music Lyrics:',
          'Production',
          'Running Time'
    
        ]
      }
    ]
  },
  hairspray: {
    name: 'Hairspray',
    location: "NYU SKIRBALL CENTER",
    icon: placerIcon,
    dates: 'APRIL 1-3, 2016',
    link: {
      type: 'visit',
      value: 'http://benefactory.live/'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote Placement'
      },
      {
        type: 'header',
        value: 'About :',        
      },
      {
        type: 'text',
        value: 'Description',
      },
      {
        type: 'points',
        value: [
          'Directed',
          'Lyrics and Music',
          'Production',
          'Running Time',
       
        ]
      }
    ]
  },
  company: {
    name: 'Company',
    location: "NYU GRAND HALL",
    icon: placerIcon,
    dates: 'NOVEMBER 7-9, 2015',
    link: {
      type: 'download',
      value: 'https://play.google.com/store/apps/details?id=com.informedtech.measure.app'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote Placement'
      },
      {
        type: 'header',
        value: 'About :',        
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'points',
        value: [
          'Directed:',
          'Music Lyrics:',
          'Production:',
          'Running time:',
        ]
      }
    ]
  },
  catchmeifyoucan: {
    name: 'Catch Me If You Can',
    location: "NYU SKIRBALL CENTER",
    icon: placerIcon,
    dates: 'APRIL 2-4, 2015',
    link: {
      type: 'download',
      value: 'https://drive.google.com/open?id=1Fo3FSfu7NHTJ60Y0uQcWYpv6mX1Tetqe'
    },
    description: [
      {
        type: 'text',
        highlight: 'green',
        value: 'Quote Placement'
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'text',
        value: 'Description'
      },
      {
        type: 'points',
        title: 'Features :',
        value: [
          'Music Lyrics:',
          'Directed:',
          'Production',
          'Running time'
        ]
      }
    ]
  }
};

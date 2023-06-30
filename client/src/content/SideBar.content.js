


import { Photo, StarOutline, SendOutlined, InsertDriveFileOutlined, DeleteOutlined,
    MailOutlined } from '@mui/icons-material';

export const SIDEBAR_DATA = [
    {
        name: 'inbox',
        title: 'Inbox',
        icon: Photo,
        
    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutline,
    
    },
    {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
        
    },
    {
        name: 'drafts',
        title: 'Drafts',
        icon: InsertDriveFileOutlined,
      
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined,
       
    },
    {
        name: 'allmail',
        title: 'All Mail',
        icon: MailOutlined,
       
    }
];
import geoIcon from '../assets/images/location-sign-svgrepo-com.svg'
import dateIcon from '../assets/images/date-range-svgrepo-com.svg'
import userIcon from '../assets/images/user-icon-svgrepo-com.svg'

export const INPUTS_DATA = [
    {
        placeholder: 'Город',
        icon: geoIcon,
        type: 'text',
    },
    {
        placeholder: 'Дата',
        icon: dateIcon,
        type: 'date',
    },
    {
        placeholder: 'Персон',
        icon: userIcon,
        type: 'number',
    }
]
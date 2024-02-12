'use client'
 
import { usePathname } from 'next/navigation'

const UrlTitle = () => {
    const pathname = usePathname()
    const urlSegments = pathname.split('/');
    const urlName = urlSegments[urlSegments.length - 1];
    const pageName = urlName.split('-').join(' ');
    const titleCase = pageName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <h1 className='text-3xl'>{titleCase}</h1>
    );
}
 
export default UrlTitle;
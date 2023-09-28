import { TbPhotoShare } from 'react-icons/tb';
import IconPathButton from '@/components/IconPathButton';

export default function ShareButton({
  path,
  prefetch,
  shouldScroll,
  dim,
}: {
  path: string
  prefetch?: boolean
  shouldScroll?: boolean
  dim?: boolean
}) {
  return (
    <IconPathButton {...{
      path,
      icon: <TbPhotoShare size={17} className={dim
        ? 'text-gray-400 dark:text-gray-500'
        : undefined} />,
      prefetch,
      shouldScroll,
    }} />
  );
}

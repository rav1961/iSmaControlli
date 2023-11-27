import type { MessagetPropsType } from './Message.type';

const variants: Record<string, string> = {
  normal: 'text-lg font-normal'
};

const Message = ({ txt, variant = 'normal' }: MessagetPropsType) => {
  return <p className={variants[variant]}>{txt}</p>;
};

export default Message;

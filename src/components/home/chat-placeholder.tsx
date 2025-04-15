import { Lock } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const ChatPlaceHolder = () => {
	return (
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
				<Image src={'/desktop-hero.png'} alt='Hero' width={320} height={188} />
				<p className='text-3xl font-extralight mt-5 mb-2'>Baixar o WhatsApp para Windows</p>
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>Baixe o novo app para Windows para fazer ligações, usar o compartilhamento de tela e ter uma experiência de uso mais rápida.</p>

				<Link href={'https://www.microsoft.com/store/productId/9NBLGGH4V3Q6'} target='_blank' className='flex items-center gap-2'>
					<Button className='rounded-full my-5 bg-green-primary hover:bg-green-secondary'>Ir para Microsoft Store</Button>
				</Link>
			</div>
			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
				<Lock size={10} /> Suas mensagens pessoais são protegidas com a criptografia de ponta a ponta.
			</p>
		</div>
	);
};
export default ChatPlaceHolder;

import { ListFilter, LogOut, MessageSquareDiff, Search, User } from 'lucide-react';
import { Input } from '../ui/input';
import ThemeSwitch from './theme-switch';
import { conversations } from '@/dummy-data/db';
import Conversation from './conversation';
import {Avatar, AvatarImage } from '../ui/avatar';

const LeftPanel = () => {
	return (
		<div className='w-1/3 border-gray-300 border-r'>
			<div className='sticky top-0 bg-left-panel z-10'>
				{/* Header */}
				<div className='flex justify-between bg-gray-primary p-3 items-center'>
					{/* <User size={20} /> */}
					<Avatar className=' overflow-visible relative'>
						<AvatarImage src="https://github.com/shadcn.png" className='rounded-full' />
					</Avatar>
					<div className='flex items-center gap-3'>
						<MessageSquareDiff size={20} /> {/* TODO: This line will be replaced with <UserListDialog /> */}
						<ThemeSwitch />
						<LogOut size={20} className='cursor-pointer' />
					</div>
				</div>
				<div className='p-2 flex items-center'>
					{/* Search */}
					<div className='relative h-10 mx-2 flex-1'>
						<Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10' size={18} />
						<Input type='text' placeholder='Pesquise uma conversa' className='pl-10 py-2 text-sm w-full rounded-lg shadow-sm bg-gray-primary focus-visible:ring-transparent' />
					</div>
					<ListFilter size={20} className='cursor-pointer' />
				</div>
			</div>

			{/* Chat List */}
			<div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
				{conversations.map((conversation) => (
					<Conversation key={conversation._id} conversation={conversation} />
				))}

				{conversations?.length === 0 && (
					<>
						<p className='text-center text-gray-500 text-sm mt-3'>Nenhuma conversa ainda</p>
						<p className='text-center text-gray-500 text-sm mt-3 '>Entendemos que você é introvertido, mas você precisa começar de algum lugar 😊</p>
					</>
				)}
			</div>
		</div>
	);
};
export default LeftPanel;

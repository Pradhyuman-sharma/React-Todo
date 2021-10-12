import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase'
import {Modal, Button, List, Avatar, ListItemAvatar, ListItem, ListItemText} from '@mui/material';
import AnimatedModal from "./animated-modal.component"

function Todo(props){

const [open, setOpen] = useState(false);



const handleOpen = () => {
	setOpen(true);
};
	return (
		<>
		
		<List>
		<ListItem>
		<ListItemAvatar>
		</ListItemAvatar>
		<ListItemText primary={props.todo.todo} secondary="Dummy Deadline!!" />
		</ListItem>
		<AnimatedModal />
		<DeleteForeverIcon onClick={event => 
			db.collection('todos').doc(props.todo.id).delete()}/> 
			
		</List>
		</>
	)
};
export default Todo



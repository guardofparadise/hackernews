import React from 'react'
import { PostMetaInfo } from './PostMetaInfo'

export const Comment = ({ comment }) => (
	<div className="comment">
		<PostMetaInfo 
			comment={true}
			by={comment.by}
			time={comment.time}
			id={comment.id}
		/>
		<p dangerouslySetInnerHTML={{__html: comment.text}} />
	</div>
)
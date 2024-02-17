import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;
    const comment = comments.find(
        (comment) => comment.id === parseInt(commentId)
    );
    return json(comment);
}


export async function PATCH(requestEvent) {
    const { params, request } = requestEvent;
    const { commentId } = params;
    const { text } = await request.json();

    // DB에서 비즈니스 로직 수행 (DB의 특정 댓글 내용 수정)
    const comment = comments.find((comment) => comment.id === parseInt(commentId));
    comment.text = text;

    return json(comment);
}


export async function DELETE(requestEvent) {
    const { params } = requestEvent;
    const { commentId } = params;

    const deletedcomment = comments.find((comment) => comment.id === parseInt(commentId));
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
    comments.splice(index, 1);
    return json(deletedcomment);
}
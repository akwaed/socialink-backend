import { Request, Response, NextFunction } from "express";

import { asyncHandler } from "../middlewares/async.middleware";
import {
    createNewPost,
    findAndDeleteUserPost,
    getPaginatedPosts,
} from "../services/post.service";
import { PostReqBody } from "../types/controllers/post.controller.type";

// @desc    Gets posts through pagination
// @route   GET /post?pageNumber&pageSize
// @access  Private
export const getPosts = asyncHandler(
    async (
        req: Request<{}, {}, {}, { pageNumber: string; pageSize: string }>,
        res: Response,
        next: NextFunction
    ) => {
        const { pageNumber, pageSize } = req.query;

        const savedEvents = await getPaginatedPosts({
            pageNumber: parseInt(pageNumber),
            pageSize: parseInt(pageSize),
        });

        res.status(200).json(savedEvents);
    }
);

// @desc    Create post
// @route   POST /post
// @access  Private
export const createPost = asyncHandler(
    async (
        req: Request<{}, {}, PostReqBody, {}>,
        res: Response,
        next: NextFunction
    ) => {
        const { user, body } = req;
        const { content } = body;

        const post = await createNewPost({
            content: content,
            creator: user,
        });

        res.status(201).json(post);
    }
);

// @desc    Delets a post
// @route   DELETE /post/:postId
// @access  Admin
export const deletePost = asyncHandler(
    async (
        req: Request<{ postId: string }, {}, {}, {}>,
        res: Response,
        next: NextFunction
    ) => {
        const { postId } = req.params;

        const post = await findAndDeleteUserPost(postId);

        res.status(200).json(post);
    }
);

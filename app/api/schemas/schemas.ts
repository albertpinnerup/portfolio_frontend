import { z } from 'zod/v4';

export const ImageSchema = z
    .object({
        url: z.string(),
        width: z.number(),
        height: z.number(),
    })
    .nullable();

export const TechnologySchema = z.object({
    title: z.string(),
    level: z.number().optional(),
    description: z.string().optional().nullable(),
});

export const TechnologySchemaArray = z.array(TechnologySchema);
export type TechnologyType = z.infer<typeof TechnologySchema>;

export const ProjectSchema = z.object({
    about: z.string().nullable().optional(),
    description: z.string().nullable().optional(),
    display_title: z.string().nullable().optional(),
    featured: z.boolean().nullable(),
    readable: z.boolean().optional().nullable(), // missing in `projectsQuery` but exists in `allProjectsQuery`
    slug: z.string(),
    title: z.string(),
    documentId: z.string().optional(), // only exists in `projectsQuery`
    technologies: z.array(TechnologySchema),
    image: ImageSchema,
});

export const ProjectsArraySchema = z.array(ProjectSchema);

export type ProjectType = z.infer<typeof ProjectSchema>;

export const DocumentIdResponseSchema = z.object({
    data: z.object({
        projects: z.array(
            z.object({
                documentId: z.string(),
            })
        ),
    }),
});

export const ProjectByDocIdSchema = z.object({
    data: z.object({
        project: ProjectSchema.nullable(),
    }),
});

export const ContactSchema = z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters'),
    email: z.string().trim().email('Invalid email address'),
    message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

/* eslint-disable */
import type { Prisma, Character } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterCreateArgs, DefaultError, Character, true>('Character', 'POST', `${endpoint}/character/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Character', 'POST', `${endpoint}/character/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCharacter<TArgs extends Prisma.CharacterFindManyArgs, TQueryFnData = Array<Prisma.CharacterGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCharacter<TArgs extends Prisma.CharacterFindManyArgs, TQueryFnData = Array<Prisma.CharacterGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/findMany`, args, options, fetch);
}

export function useFindUniqueCharacter<TArgs extends Prisma.CharacterFindUniqueArgs, TQueryFnData = Prisma.CharacterGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/findUnique`, args, options, fetch);
}

export function useFindFirstCharacter<TArgs extends Prisma.CharacterFindFirstArgs, TQueryFnData = Prisma.CharacterGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/findFirst`, args, options, fetch);
}

export function useUpdateCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterUpdateArgs, DefaultError, Character, true>('Character', 'PUT', `${endpoint}/character/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Character', 'PUT', `${endpoint}/character/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterUpsertArgs, DefaultError, Character, true>('Character', 'POST', `${endpoint}/character/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Character | undefined), DefaultError, Prisma.CharacterDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterDeleteArgs, DefaultError, Character, true>('Character', 'DELETE', `${endpoint}/character/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.CharacterDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Character, Prisma.CharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.CharacterDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.CharacterDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Character', 'DELETE', `${endpoint}/character/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.CharacterDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CharacterDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.CharacterDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCharacter<TArgs extends Prisma.CharacterAggregateArgs, TQueryFnData = Prisma.GetCharacterAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/aggregate`, args, options, fetch);
}

export function useGroupByCharacter<TArgs extends Prisma.CharacterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.CharacterGroupByArgs['orderBy'] } : { orderBy?: Prisma.CharacterGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.CharacterGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.CharacterGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.CharacterGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.CharacterGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CharacterGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.CharacterGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/groupBy`, args, options, fetch);
}

export function useCountCharacter<TArgs extends Prisma.CharacterCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.CharacterCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.CharacterCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.CharacterCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Character', `${endpoint}/character/count`, args, options, fetch);
}

export function useCheckCharacter<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; name?: string; player?: number; age?: string; pronouns?: string; gender?: string; birthday?: string; address?: string; hometown?: string; approach?: string; spheres?: string; incomeSource?: string; background?: string; imageurl?: string; description?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Character', `${endpoint}/character/check`, args, options, fetch);
}

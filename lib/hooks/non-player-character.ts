/* eslint-disable */
import type { Prisma, NonPlayerCharacter } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterCreateArgs, DefaultError, NonPlayerCharacter, true>('NonPlayerCharacter', 'POST', `${endpoint}/nonPlayerCharacter/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('NonPlayerCharacter', 'POST', `${endpoint}/nonPlayerCharacter/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterFindManyArgs, TQueryFnData = Array<Prisma.NonPlayerCharacterGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/findMany`, args, options, fetch);
}

export function useInfiniteFindManyNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterFindManyArgs, TQueryFnData = Array<Prisma.NonPlayerCharacterGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/findMany`, args, options, fetch);
}

export function useFindUniqueNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterFindUniqueArgs, TQueryFnData = Prisma.NonPlayerCharacterGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/findUnique`, args, options, fetch);
}

export function useFindFirstNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterFindFirstArgs, TQueryFnData = Prisma.NonPlayerCharacterGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/findFirst`, args, options, fetch);
}

export function useUpdateNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterUpdateArgs, DefaultError, NonPlayerCharacter, true>('NonPlayerCharacter', 'PUT', `${endpoint}/nonPlayerCharacter/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('NonPlayerCharacter', 'PUT', `${endpoint}/nonPlayerCharacter/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterUpsertArgs, DefaultError, NonPlayerCharacter, true>('NonPlayerCharacter', 'POST', `${endpoint}/nonPlayerCharacter/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(NonPlayerCharacter | undefined), DefaultError, Prisma.NonPlayerCharacterDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterDeleteArgs, DefaultError, NonPlayerCharacter, true>('NonPlayerCharacter', 'DELETE', `${endpoint}/nonPlayerCharacter/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, NonPlayerCharacter, Prisma.NonPlayerCharacterGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyNonPlayerCharacter(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.NonPlayerCharacterDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.NonPlayerCharacterDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('NonPlayerCharacter', 'DELETE', `${endpoint}/nonPlayerCharacter/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.NonPlayerCharacterDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.NonPlayerCharacterDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterAggregateArgs, TQueryFnData = Prisma.GetNonPlayerCharacterAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/aggregate`, args, options, fetch);
}

export function useGroupByNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.NonPlayerCharacterGroupByArgs['orderBy'] } : { orderBy?: Prisma.NonPlayerCharacterGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.NonPlayerCharacterGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.NonPlayerCharacterGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.NonPlayerCharacterGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.NonPlayerCharacterGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.NonPlayerCharacterGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.NonPlayerCharacterGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/groupBy`, args, options, fetch);
}

export function useCountNonPlayerCharacter<TArgs extends Prisma.NonPlayerCharacterCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.NonPlayerCharacterCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.NonPlayerCharacterCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/count`, args, options, fetch);
}

export function useCheckNonPlayerCharacter<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { characterId?: number; attitudeTo?: string; attitudeFrom?: string }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('NonPlayerCharacter', `${endpoint}/nonPlayerCharacter/check`, args, options, fetch);
}

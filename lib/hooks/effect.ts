/* eslint-disable */
import type { Prisma, Effect } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectCreateArgs, DefaultError, Effect, true>('Effect', 'POST', `${endpoint}/effect/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Effect', 'POST', `${endpoint}/effect/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyEffect<TArgs extends Prisma.EffectFindManyArgs, TQueryFnData = Array<Prisma.EffectGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/findMany`, args, options, fetch);
}

export function useInfiniteFindManyEffect<TArgs extends Prisma.EffectFindManyArgs, TQueryFnData = Array<Prisma.EffectGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/findMany`, args, options, fetch);
}

export function useFindUniqueEffect<TArgs extends Prisma.EffectFindUniqueArgs, TQueryFnData = Prisma.EffectGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/findUnique`, args, options, fetch);
}

export function useFindFirstEffect<TArgs extends Prisma.EffectFindFirstArgs, TQueryFnData = Prisma.EffectGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/findFirst`, args, options, fetch);
}

export function useUpdateEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectUpdateArgs, DefaultError, Effect, true>('Effect', 'PUT', `${endpoint}/effect/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Effect', 'PUT', `${endpoint}/effect/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectUpsertArgs, DefaultError, Effect, true>('Effect', 'POST', `${endpoint}/effect/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Effect | undefined), DefaultError, Prisma.EffectDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectDeleteArgs, DefaultError, Effect, true>('Effect', 'DELETE', `${endpoint}/effect/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.EffectDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Effect, Prisma.EffectGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyEffect(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.EffectDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.EffectDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Effect', 'DELETE', `${endpoint}/effect/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.EffectDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.EffectDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.EffectDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateEffect<TArgs extends Prisma.EffectAggregateArgs, TQueryFnData = Prisma.GetEffectAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/aggregate`, args, options, fetch);
}

export function useGroupByEffect<TArgs extends Prisma.EffectGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.EffectGroupByArgs['orderBy'] } : { orderBy?: Prisma.EffectGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.EffectGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.EffectGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.EffectGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.EffectGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.EffectGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.EffectGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/groupBy`, args, options, fetch);
}

export function useCountEffect<TArgs extends Prisma.EffectCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.EffectCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.EffectCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.EffectCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Effect', `${endpoint}/effect/count`, args, options, fetch);
}

export function useCheckEffect<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; description?: string; quintessenceCost?: number; willpowerCost?: number; wonderId?: number }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Effect', `${endpoint}/effect/check`, args, options, fetch);
}

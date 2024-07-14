/* eslint-disable */
import type { Prisma, Wonder } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderCreateArgs, DefaultError, Wonder, true>('Wonder', 'POST', `${endpoint}/wonder/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Wonder', 'POST', `${endpoint}/wonder/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyWonder<TArgs extends Prisma.WonderFindManyArgs, TQueryFnData = Array<Prisma.WonderGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/findMany`, args, options, fetch);
}

export function useInfiniteFindManyWonder<TArgs extends Prisma.WonderFindManyArgs, TQueryFnData = Array<Prisma.WonderGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/findMany`, args, options, fetch);
}

export function useFindUniqueWonder<TArgs extends Prisma.WonderFindUniqueArgs, TQueryFnData = Prisma.WonderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/findUnique`, args, options, fetch);
}

export function useFindFirstWonder<TArgs extends Prisma.WonderFindFirstArgs, TQueryFnData = Prisma.WonderGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/findFirst`, args, options, fetch);
}

export function useUpdateWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderUpdateArgs, DefaultError, Wonder, true>('Wonder', 'PUT', `${endpoint}/wonder/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Wonder', 'PUT', `${endpoint}/wonder/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderUpsertArgs, DefaultError, Wonder, true>('Wonder', 'POST', `${endpoint}/wonder/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(Wonder | undefined), DefaultError, Prisma.WonderDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderDeleteArgs, DefaultError, Wonder, true>('Wonder', 'DELETE', `${endpoint}/wonder/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WonderDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Wonder, Prisma.WonderGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyWonder(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WonderDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WonderDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Wonder', 'DELETE', `${endpoint}/wonder/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WonderDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WonderDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WonderDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateWonder<TArgs extends Prisma.WonderAggregateArgs, TQueryFnData = Prisma.GetWonderAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/aggregate`, args, options, fetch);
}

export function useGroupByWonder<TArgs extends Prisma.WonderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.WonderGroupByArgs['orderBy'] } : { orderBy?: Prisma.WonderGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.WonderGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.WonderGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.WonderGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.WonderGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WonderGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WonderGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/groupBy`, args, options, fetch);
}

export function useCountWonder<TArgs extends Prisma.WonderCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.WonderCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.WonderCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.WonderCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Wonder', `${endpoint}/wonder/count`, args, options, fetch);
}

export function useCheckWonder<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: number; description?: string; spheres?: string; arete?: number; rank?: number; type?: string; system?: string; cost?: string; quintessence?: number }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Wonder', `${endpoint}/wonder/check`, args, options, fetch);
}

/* eslint-disable */
import type { Prisma, RequiredSpheres } from "@prisma/client";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { MaybeRefOrGetter, ComputedRef, UnwrapRef } from 'vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/vue';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;

export function useCreateRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresCreateArgs, unknown>> | ComputedRef<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresCreateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresCreateArgs, DefaultError, RequiredSpheres, true>('RequiredSpheres', 'POST', `${endpoint}/requiredSpheres/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresCreateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresCreateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('RequiredSpheres', 'POST', `${endpoint}/requiredSpheres/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresCreateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyRequiredSpheres<TArgs extends Prisma.RequiredSpheresFindManyArgs, TQueryFnData = Array<Prisma.RequiredSpheresGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindManyArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRequiredSpheres<TArgs extends Prisma.RequiredSpheresFindManyArgs, TQueryFnData = Array<Prisma.RequiredSpheresGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindManyArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindManyArgs>>, options?: MaybeRefOrGetter<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>> | ComputedRef<Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>>) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/findMany`, args, options, fetch);
}

export function useFindUniqueRequiredSpheres<TArgs extends Prisma.RequiredSpheresFindUniqueArgs, TQueryFnData = Prisma.RequiredSpheresGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindUniqueArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindUniqueArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/findUnique`, args, options, fetch);
}

export function useFindFirstRequiredSpheres<TArgs extends Prisma.RequiredSpheresFindFirstArgs, TQueryFnData = Prisma.RequiredSpheresGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindFirstArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresFindFirstArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/findFirst`, args, options, fetch);
}

export function useUpdateRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresUpdateArgs, unknown>> | ComputedRef<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresUpdateArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresUpdateArgs, DefaultError, RequiredSpheres, true>('RequiredSpheres', 'PUT', `${endpoint}/requiredSpheres/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresUpdateManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresUpdateManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('RequiredSpheres', 'PUT', `${endpoint}/requiredSpheres/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpdateManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresUpsertArgs, unknown>> | ComputedRef<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresUpsertArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresUpsertArgs, DefaultError, RequiredSpheres, true>('RequiredSpheres', 'POST', `${endpoint}/requiredSpheres/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresUpsertArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpsertArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresUpsertArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresDeleteArgs, unknown>> | ComputedRef<UseMutationOptions<(RequiredSpheres | undefined), DefaultError, Prisma.RequiredSpheresDeleteArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresDeleteArgs, DefaultError, RequiredSpheres, true>('RequiredSpheres', 'DELETE', `${endpoint}/requiredSpheres/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteArgs>, unknown>> | ComputedRef<UseMutationOptions<(CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, RequiredSpheres, Prisma.RequiredSpheresGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyRequiredSpheres(options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresDeleteManyArgs, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RequiredSpheresDeleteManyArgs, unknown>> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RequiredSpheresDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('RequiredSpheres', 'DELETE', `${endpoint}/requiredSpheres/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RequiredSpheresDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteManyArgs>,
            options?: Omit<(MaybeRefOrGetter<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteManyArgs>, unknown>> | ComputedRef<UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RequiredSpheresDeleteManyArgs>, unknown>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateRequiredSpheres<TArgs extends Prisma.RequiredSpheresAggregateArgs, TQueryFnData = Prisma.GetRequiredSpheresAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresAggregateArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresAggregateArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/aggregate`, args, options, fetch);
}

export function useGroupByRequiredSpheres<TArgs extends Prisma.RequiredSpheresGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.RequiredSpheresGroupByArgs['orderBy'] } : { orderBy?: Prisma.RequiredSpheresGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.RequiredSpheresGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.RequiredSpheresGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.RequiredSpheresGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.RequiredSpheresGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.RequiredSpheresGroupByArgs, OrderByArg> & InputErrors>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.RequiredSpheresGroupByArgs, OrderByArg> & InputErrors>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/groupBy`, args, options, fetch);
}

export function useCountRequiredSpheres<TArgs extends Prisma.RequiredSpheresCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.RequiredSpheresCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: MaybeRefOrGetter<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresCountArgs>> | ComputedRef<Prisma.SelectSubset<TArgs, Prisma.RequiredSpheresCountArgs>>, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<TQueryFnData, TError, TData>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/count`, args, options, fetch);
}
import type { Sphere } from '@prisma/client';

export function useCheckRequiredSpheres<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { effectId?: number; sphere?: Sphere; rank?: number }; }, options?: (MaybeRefOrGetter<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> | ComputedRef<Omit<UnwrapRef<UseQueryOptions<boolean, TError, boolean>>, 'queryKey'>> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('RequiredSpheres', `${endpoint}/requiredSpheres/check`, args, options, fetch);
}

import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, choosePower, chooseIsAHero } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface HeroFormProps {
    id?:string;
    data?:{}
}

interface HeroState {
    name: string;
    power: string;
    is_a_hero: string;
}

export const HeroForm = (props:HeroFormProps) => {

    const dispatch = useDispatch();
    let { heroData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<HeroState>(state => state.name)
    const power = useSelector<HeroState>(state => state.power)
    const is_a_hero = useSelector<HeroState>(state => state.is_a_hero)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(data)
        console.log(props)

        if( props.id!){
            serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            setTimeout(()=>{ window.location.reload(); }, 1000);
            event.target.reset();
        } else {
            console.log(data)
            dispatch(chooseName(data.name))
            dispatch(choosePower(data.power))
            dispatch(chooseIsAHero(data.is_a_hero))
            console.log(store.getState())
            serverCalls.create(store.getState())
            console.log(data.name)
            console.log(data.power)
            setTimeout(()=>{ window.location.reload(); }, 1000);
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero/Villain Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="power">Their Power:</label>
                    <Input {...register('power')} name="power" placeholder="Power"/>
                </div>
                <div>
                    <label htmlFor="is_a_hero">Are They Hero or Villain?</label>
                    <Input {...register('is_a_hero')} name="is_a_hero" placeholder="'Hero' or 'Villain'?"/>
                </div>
                <div>
                    <label htmlFor="comics_appeared_in">Comic Appearences:</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>
                <div>
                    <label htmlFor="description">Their Description:</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="back_story">Their Back Story:</label>
                    <Input {...register('back_story')} name="back_story" placeholder="Back Story"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
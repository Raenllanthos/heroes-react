import React, { useState } from 'react';
import { DataGrid, GridColDef} from '@material-ui/data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,DialogActions,
DialogContent,DialogContentText,DialogTitle
} from '@material-ui/core';
import { HeroForm } from '../HeroForm';

interface gridData{
    data:{
      id?:string;
    }
  }

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'power', headerName: 'Power', width: 130 },
    { field: 'is_a_hero',headerName: 'H/V',width: 90 },
];

export const DataTable =  () => {
  
    let { heroData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      serverCalls.delete(gridData.data.id!)
      getData()
    }
  
    console.log(gridData.data.id)
  
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Heroes and Villains</h2>
            <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update a Hero/Villain</DialogTitle>
                <DialogContent>
                    <DialogContentText>Update Hero/Villain</DialogContentText>
                    <HeroForm id={gridData.data.id!}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color = "primary">Done</Button> 
                </DialogActions>
            </Dialog>
        </div>
    );
}
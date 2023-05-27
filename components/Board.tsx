'use client'

import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import React, { useEffect } from 'react'
import { useBoardStore } from '@/store/BoardStore'

const Board = () => {
  const getBoard = useBoardStore((state)=> state.getBoard)

  useEffect(() => {
    getBoard()
  }, [getBoard])

  return (
    <h1>hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId='board' direction='horizontal' type='column'>
    //       {(provided) => (
    //         <div>
    //           {/* Rendering all columns */}
    //         </div>
    //       )

    //       }
    //   </Droppable>
    // </DragDropContext>
  )
}

export default Board
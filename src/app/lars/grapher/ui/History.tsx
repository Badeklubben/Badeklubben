import { useEffect, useState } from "react";
import { Graph, GraphState, HistoryElement } from "../lib/definitions";
import { loadData, saveData } from "../lib/saver";

export default function History({ 
        graph
    } : {
        graph : GraphState
    }) {
    const [history, setHistory] = useState<HistoryElement|undefined>();

    //check for local progress
    useEffect(() => {
        const savedGraph = loadData();
        if ( savedGraph ) {
            updateGraph(savedGraph);
            graph.setActive(prev => Object.keys(savedGraph.nodes)[0]);
        };
        graph.setHasUnsavedChanges(true);
    }, []);


    //event listners
    useEffect(() => {
        document.addEventListener('keydown', undo);
        return (() => document.removeEventListener('keydown', undo));
    }, [history]);

    //Save
    useEffect(() => {
        if ( !graph.hasUnsavedChanges ) return;
        const g = {nodes:graph.nodes,edges:graph.edges};

        if (history && history.graph.nodes === g.nodes && history.graph.edges === g.edges ) return;
        
        saveData(g);
        setHistory((prev) => {
            if (!prev) return new HistoryElement(g);
            return prev.add(g);
        })
        graph.setHasUnsavedChanges(false);
    }, [graph.nodes,graph.edges,graph.hasUnsavedChanges]);

    const updateGraph = (g : Graph) => {
        graph.setNodes((prev) => g.nodes);
        graph.setEdges((prev) => g.edges);
    }

    const undo = (e: KeyboardEvent) => {
        if (!history) return;
        if (e.code == 'KeyZ' && e.ctrlKey) {
            if ( e.shiftKey ) {
                if ( history.next ) {
                    updateGraph(history.next!.graph);
                    setHistory(prev => prev!.next);
                }
                return;
            }
            if ( history.previous ) {
                updateGraph(history.previous!.graph);
                setHistory(prev => prev!.previous);
            }          
        }
    }
    return null;
}
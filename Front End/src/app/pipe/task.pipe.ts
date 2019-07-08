import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';

@Pipe({
    name: 'taskfilter'
})
export class TaskFilterPipe implements PipeTransform {
    transform(tasks: Task[], taskFilterProp: any): Task[] {
        if (!tasks)
            return [];

        let searchText = taskFilterProp[0]
        if (!searchText)
            return tasks;
        searchText = searchText.toLowerCase()

        return tasks.filter(it => {
            console.log(searchText)
            console.log(it.taskName.toLowerCase())
            it.taskName.toLowerCase().includes(searchText);
        })
    }
}
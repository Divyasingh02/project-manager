import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../model/task';


@Pipe({ name: 'priorityFilter' })
export class PriorityFilterPipe implements PipeTransform {
    transform(taskList: Task[], priority: number): Task[] {
        if (!taskList)
            return [];
        if (priority)
            return taskList;
        taskList.filter(it => {
            console.log(it.priority)
        })
        return taskList.filter(task => task.priority.valueOf() === priority)
    }
}
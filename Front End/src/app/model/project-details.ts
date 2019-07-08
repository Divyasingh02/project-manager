export class ProjectDetails {
    constructor(
        public projectName: string,
        public noOfTasks: number,
        public noOfTasksCompleted: number,
        public startDate: Date,
        public endDate: Date,
        public priority: number
    ) { }
}

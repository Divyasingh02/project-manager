export class Task {
    // constructor(){}

    constructor(
        public taskId: number,
        public parentId: number,
        public taskName: string,
        public parentTask: string,
        public priority: number,
        public startDate: Date,
        public endDate: Date,
        public status: string,
        public user: string,
        public projectId: number
    ) { }
}

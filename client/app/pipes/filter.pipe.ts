/*
 * filter.pipe.ts
 *
 * Copyright (c) 2016, Tobias Koltsch. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/lgpl.txt>.
 */

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {

    transform(filteredList: any[], filteredByField: string, filterValue: string): any {
        if (!filteredByField || !filterValue) {
            return filteredList;
        }

        return filteredList.filter(item => {
            const field = item[filteredByField].toLowerCase();
            const filter = filterValue.toLowerCase();
            return field.indexOf(filter) >= 0;
        });
    }
}
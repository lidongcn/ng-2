/**
 * Created by lidong on 16/9/18.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

/**
 * 1.创建一个heroes数组属性
 * 2.把HeroService注入构造函数中,并且把它保存在一个私有的heroService字段中
 * 3.在Angular的ngOnInit生命周期钩子里面调用服务还获得英雄列表
 */

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    /**
     * gotoDetail 方法分两步完成导航:
     *  1.生成路由的链接参数数组
     *  2.把这个数组传给路由器的navigate方法
     * @param hero
     */
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}

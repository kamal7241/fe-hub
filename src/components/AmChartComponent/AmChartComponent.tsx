import React, { useEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function AmChartComponent() {
    const chartDivRef = useRef(null);

    useEffect(() => {
        if (!chartDivRef.current) return;

        // Create root element
        const root = am5.Root.new(chartDivRef.current);

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        const container = root.container.children.push(
            am5.Container.new(root, {
                width: am5.percent(100),
                height: am5.percent(100),
                layout: root.verticalLayout
            })
        );

        const series = container.children.push(
            am5hierarchy.Tree.new(root, {
                singleBranchOnly: false,
                downDepth: 1,
                initialDepth: 5,
                topDepth: 0,
                valueField: "value",
                categoryField: "name",
                childDataField: "children",
                orientation: "vertical"
            })
        );
        series.nodes.template.setAll({
            scale: 1.2
        });
        series.data.setAll([{
            name: "HOOKS",
            children: [{
                name: "A0",
                children: [{
                    name: "HOOKS",
                    value: 88
                }, {
                    name: "A01",
                    value: 23
                }, {
                    name: "A02",
                    value: 25
                }]
            }, {
                name: "B0",
                children: [{
                    name: "B10",
                    value: 62
                }, {
                    name: "B11",
                    value: 4
                }]
            }, {
                name: "C0",
                children: [{
                    name: "C20",
                    value: 11
                }, {
                    name: "C21",
                    value: 92
                }, {
                    name: "C22",
                    value: 17
                }]
            }, {
                name: "D0",
                children: [{
                    name: "D30",
                    value: 95
                }, {
                    name: "D31",
                    value: 84
                }, {
                    name: "D32",
                    value: 75
                }]
            }]
        }]);

        return () => {
            root.dispose();
        };
    }, []);

    return <div ref={chartDivRef} style={{ width: "100%", height: "90vh" }}></div>;
}

export default AmChartComponent;

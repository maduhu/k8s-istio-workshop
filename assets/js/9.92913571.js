(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{264:function(t,e,r){t.exports=r.p+"assets/img/istio.a24267ed.svg"},281:function(t,e,r){t.exports=r.p+"assets/img/kubeadm_diagram.dfa2d371.png"},337:function(t,e,r){"use strict";r.r(e);var a=r(9),s=Object(a.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"istio-workshop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#istio-workshop","aria-hidden":"true"}},[t._v("#")]),t._v(" Istio workshop")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://istio.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Istio"),a("OutboundLink")],1),t._v(" is an open platform to connect, secure, control\nand observe microservices, also known as a service mesh, on cloud platforms\nsuch as Kubernetes.")]),t._v(" "),a("p",[a("img",{attrs:{src:r(264),alt:"Istio",title:"Istio"}})]),t._v(" "),a("p",[t._v("With Istio, you can manage network traffic, load balance across microservices,\nenforce access policies, verify service identity, secure service communication,\nand observe what exactly is going on with your services.")]),t._v(" "),a("ul",[a("li",[t._v("Full asciinema screencast: "),a("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://asciinema.org/a/229605"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("GitHub repository: "),a("a",{attrs:{href:"https://github.com/mirantis/k8s-istio-workshop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mirantis/k8s-istio-workshop"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/docs/reference/kubectl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubectl"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Access to OpenStack environment to provision 3 VMs")]),t._v(" "),a("li",[t._v("Kubernetes knowledge")])]),t._v(" "),a("h2",{attrs:{id:"objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectives","aria-hidden":"true"}},[t._v("#")]),t._v(" Objectives")]),t._v(" "),a("p",[t._v("After you complete this course, you'll be able to:")]),t._v(" "),a("ul",[a("li",[t._v("Download and install Istio in your cluster")]),t._v(" "),a("li",[t._v("Deploy the Guestbook sample app")]),t._v(" "),a("li",[t._v("Use metrics, logging, and tracing to observe services")]),t._v(" "),a("li",[t._v("Set up the Istio Ingress Gateway")]),t._v(" "),a("li",[t._v("Perform simple traffic management, such as A/B tests and canary deployments")]),t._v(" "),a("li",[t._v("Secure your service mesh")]),t._v(" "),a("li",[t._v("Enforce policies for your microservices")])]),t._v(" "),a("p",[a("img",{attrs:{src:r(281),alt:"Lab diagram",title:"Lab diagram"}})]),t._v(" "),a("h2",{attrs:{id:"workshop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workshop","aria-hidden":"true"}},[t._v("#")]),t._v(" Workshop")]),t._v(" "),a("p",[t._v("You will perform the following exercises in the lab:")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/lab-01/"}},[t._v("Lab 01 - Create VMs in OpenStack")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-02/"}},[t._v("Lab 02 - Install Kubernetes to the VMs")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-03/"}},[t._v("Lab 03 - Install Helm")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-04/"}},[t._v("Lab 04 - Install Rook")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-05/"}},[t._v("Lab 05 - Install ElasticSearch")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-06/"}},[t._v("Lab 06 - Istio - Installation")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-07/"}},[t._v("Lab 07 - Istio - Bookinfo Application")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-08/"}},[t._v("Lab 08 - Istio - Configuring Request Routing")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-09/"}},[t._v("Lab 09 - Istio - Injecting an HTTP delay fault")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-10/"}},[t._v("Lab 10 - Istio - Weight-based routing")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-11/"}},[t._v("Lab 11 - Istio - Mirroring")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/lab-12/"}},[t._v("Lab 12 - Istio - Cleanup")])],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("In case you turned off the servers or restart your computer please verify you\nhave the "),a("code",[t._v("KUBECONFIG")]),t._v(" variable set and all "),a("code",[t._v("kubectl port-forward")]),t._v(" up and running:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PWD")]),t._v("/kubeconfig.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" KUBECONFIG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${KUBECONFIG:-$PWD/kubeconfig.conf}")]),t._v("\nkubectl get nodes -o wide\n")])])]),a("h2",{attrs:{id:"list-of-guis-used-in-workshop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-of-guis-used-in-workshop","aria-hidden":"true"}},[t._v("#")]),t._v(" List of GUIs used in Workshop")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.jaegertracing.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jaeger"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://istio.io/docs/tasks/telemetry/distributed-tracing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/telemetry/distributed-tracing/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl port-forward -n istio-system "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get pod -n istio-system \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jaeger -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 16686:16686 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:16686",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:16686"),a("OutboundLink")],1)])])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prometheus"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://istio.io/docs/tasks/telemetry/querying-metrics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/telemetry/querying-metrics/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n istio-system port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n istio-system get pod \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("prometheus -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 9090:9090 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:9090/graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9090/graph"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Grafana"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://istio.io/docs/tasks/telemetry/using-istio-dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/telemetry/using-istio-dashboard/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n istio-system port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n istio-system get pod \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("grafana -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 3000:3000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:3000/dashboard/db/istio-mesh-dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/dashboard/db/istio-mesh-dashboard"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.kiali.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kiali"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://istio.io/docs/tasks/telemetry/kiali/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/telemetry/kiali/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n istio-system port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n istio-system get pod \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kiali -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 20001:20001 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Login: admin")])]),t._v(" "),a("li",[a("p",[t._v("Password: admin")])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:20001",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:20001"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[t._v("Servicegraph - "),a("a",{attrs:{href:"https://istio.io/docs/tasks/telemetry/servicegraph/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/telemetry/servicegraph/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n istio-system port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n istio-system get pod \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("servicegraph -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 8088:8088 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:8088/force/forcegraph.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8088/force/forcegraph.html"),a("OutboundLink")],1),t._v(",\n"),a("a",{attrs:{href:"http://localhost:8088/dotviz",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8088/dotviz"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.elastic.co/products/kibana",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kibana"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n logging port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n logging get pod \\\n-l role"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kibana -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 5601:5601 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"https://localhost:5601",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost:5601"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/lmenezes/cerebro",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cerbero"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n logging port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n logging get pod \\\n-l role"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cerebro -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 9000:9000 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"http://localhost:9000",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9000"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"http://docs.ceph.com/docs/mimic/mgr/dashboard/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ceph Dashboard"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n rook-ceph port-forward "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n rook-ceph get pod \\\n-l app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rook-ceph-mgr -o jsonpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" 8443:8443 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Login: admin")])]),t._v(" "),a("li",[a("p",[t._v("Password:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl -n rook-ceph get secret rook-ceph-dashboard-password -o yaml \\\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password:"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v("}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" base64 --decode\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Link: "),a("a",{attrs:{href:"https://localhost:8443",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://localhost:8443"),a("OutboundLink")],1)])])])])]),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links","aria-hidden":"true"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Video:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=sh0F7FMFVSI",target:"_blank",rel:"noopener noreferrer"}},[t._v("Istio Service Mesh by Mete Atamel @ .NET Conf UY v2018"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=RVScqW8_liw",target:"_blank",rel:"noopener noreferrer"}},[t._v("Liam White - Istio @ GDGReading DevFest 2018"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=OAW5rbttic0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Istio Service Mesh & pragmatic microservices architecture - Álex Soto"),a("OutboundLink")],1)])])])]),t._v(" "),a("li",[a("p",[t._v("Pages:")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://istio101.gitbook.io/lab/workshop/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Introduction - Istio 101 Lab"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/leecalcote/istio-service-mesh-workshop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Istio Workshop by Layer5.io"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/retroryan/istio-workshop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Istio Workshop by Ray Tsang"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://eksworkshop.com/servicemesh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EKS Workshop - Service Mesh with Istio"),a("OutboundLink")],1)])])])])])])},[],!1,null,null,null);e.default=s.exports}}]);
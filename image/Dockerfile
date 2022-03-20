FROM centos/nodejs-12-centos7

RUN set -eux;  
WORKDIR ./image
COPY --chown=root:root project2.js ./
CMD ["node", "project2.js"] 

